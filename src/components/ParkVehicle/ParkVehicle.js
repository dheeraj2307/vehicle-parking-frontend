import ParkVehicleForm from "./ParkVehicleForm";

function ParkVehicle({
    addCarToList
}){

    return (
        <div id="parkVehicle"  className="block" >
            <h2>Park Vehicle</h2>
            <ParkVehicleForm addCarToList={addCarToList}/>
        </div>
    )

}

export default ParkVehicle;