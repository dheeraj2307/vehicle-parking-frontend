import VehicleInfo from "../VehicleInfo";

export function GetAllVehicleInfo({carsInfo}){
    return (
        <div id="getAllVehicleInfo" className="block">
            <h2>Get All Vehicle Info</h2>
            {carsInfo?.map(VehicleInfo)}
        </div>
    );
}
