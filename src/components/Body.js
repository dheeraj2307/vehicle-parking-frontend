import React, { useEffect, useState } from "react";
import {GetAllVehicleInfo, getVehicleInfo} from "./GetAll/GetAllInfoCard";
import ParkVehicle from "./ParkVehicle/ParkVehicle";
import UnParkVehicle from "./UnParkVehicle/UnParkVehicle";
import GetVehicleInfo from "./GetVehicle/GetVehicleInfo";

function Body() {
    const [allCarsInfo, setAllCarsInfo] = useState([]);
    const [dataAddedToList, setDataAddedToList] = useState(false);
    
    useEffect(() => {
        getAllVehicleInfo();

    }, [dataAddedToList]);

    const getAllVehicleInfo = async () => {

      const getURL = "http://localhost:8082/vehicle/allinfo";
      let headers =new Headers();
    
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
    
      headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

      try {
        const response = await fetch(getURL,{
          method: "GET",
          headers: headers
        }).then((res) => res.json() );
        if (response) {
          console.log("this is response", response);
          setAllCarsInfo(response);
        }
      } catch(err) {
          console.log(err);
      };
    }

    const addCarToList = () => {
      setDataAddedToList(data => !data)
    }

    return (
        <div className="body">
        <GetAllVehicleInfo carsInfo={allCarsInfo}></GetAllVehicleInfo>
        <ParkVehicle addCarToList={addCarToList}></ParkVehicle>
        <UnParkVehicle></UnParkVehicle>
        <GetVehicleInfo></GetVehicleInfo>        
      </div>
    )
}

export default Body;