import { useState } from "react";
import VehicleInfo from "../VehicleInfo";

function ParkVehicleForm(props){

    const postVehicleURL = "http://localhost:8082/vehicle/parking"

    const [styles, setStyles] = useState({
        backgroundColor: "lightblue"
    })

    const [carInfo, setCarInfo] = useState({});

    function onSubmit(event) {
        event.preventDefault();
        const headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

        fetch(postVehicleURL,
            {
                method: "POST",
                headers : headers,
                body: JSON.stringify({
                    vehicleType: carInfo?.vehicleType,
                    vehicleNum : carInfo?.vehicleNum
            })
            })
            .then((response) => (response.json()))
            .then((data) => {
                // setVehicleNum(data.vehicleNum);
                // setSlotNo(data.slotNo);
                // setVehicleType(data.vehicleType);
                setCarInfo({
                    vehicleNum: data.vehicleNum,
                    slotNo: data.slotNo,
                    vehicleType: data.vehicleType
                })
                props.addCarToList();
            })
            .catch((err)=> {
                console.log(err);
            });
    }

    return (
        <div>
            <form>
                <div id="vehicleNumberBox">
                    <label id="vehicleNumLabel">Vehicle Number: </label>
                    <input id="vehicleNumIn" className="inputBox" onChange={(event) => {
                        carInfo.vehicleNum = event.target.value;
                        setCarInfo(carInfo)
                    }}></input>
                </div>
                <div id="vehicleTypeBox">
                    <label id="vehicleTypeLabel">Vehicle Type: </label>
                    <select id="vehicleType" name="vehicleType" onChange={(event) =>                 {
                        carInfo.vehicleType = event.target.value;
                        setCarInfo(carInfo)
                        }}>
                        <option value="CAR">Car</option>
                        <option value="BIKE">Bike</option>
                    </select>
                </div>
                <button id="parkVehicleButton" className="vehicleButton" style={styles} onMouseOver={() => setStyles({backgroundColor: "#008CBA"})} onMouseLeave={() => setStyles({backgroundColor: "lightblue"})} 
                onClick={(event) => onSubmit(event)}>Submit</button>
            </form>
            {/* We are using response as a component */}
            {createResponse(carInfo?.slotNo, carInfo?.vehicleNum, carInfo?.vehicleType)}
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

export default ParkVehicleForm;