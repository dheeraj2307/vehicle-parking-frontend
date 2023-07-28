import { useState } from "react";
import VehicleInfo from "../VehicleInfo";

function GetVehicleInfoForm(){

    // Todo use place holder for slotNumber
    const deleteUrl = "http://localhost:8082/vehicle/info/"

    const [slotNo, setSlotNo] = useState("");

    const [vehicleType, setVehicleType] = useState("CAR");

    const [vehicleNum, setVehicleNum] = useState("");

    const [styles, setStyles] = useState({
        backgroundColor: "lightblue"
    })

    return (
        <div>
            <form>
            <div id="slotNoBox">
                <label id="soltNoLabel">Slot No: </label>
                <input id="soltNoIn" className="inputBox" onChange={(event) => setSlotNo(event.target.value)}></input>
             </div>
             <button className="vehicleButton" style={styles} onMouseOver={() => setStyles({backgroundColor: "#008CBA"})} onMouseLeave={() => setStyles({backgroundColor: "lightblue"})}
             onClick={
                (event)=>{
                    event.preventDefault();

                    const headers =new Headers();

                    headers.append('Content-Type', 'application/json');
                    headers.append('Accept', 'application/json');
                    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/?');

                    fetch(
                        deleteUrl+slotNo,{
                            method:"GET",
                            headers: headers
                        }
                    )
                    .then((response) => (response.json()))
                    .then((data) => {
                        setSlotNo(data.slotNo)
                        setVehicleNum(data.vehicleNum)
                        setVehicleType(data.vehicleType)
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }
             }
             >Submit</button>
             {createResponse(slotNo, vehicleNum, vehicleType)}
            </form>
        </div>
    )
}

function createResponse(slotNo, number, type){

    var code;
    slotNo===""? code=<></>: code=(
        <div>
            <VehicleInfo slotNo={slotNo} vehicleNum={number} vehicleType={type}></VehicleInfo>
        </div>
    );
    return code;
}

export default GetVehicleInfoForm;
