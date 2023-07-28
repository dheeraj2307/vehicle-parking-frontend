

function VehicleInfo(props){
    return(
    <div className="vehicleCard" key={props.slotNo}>
        <p>SlotNo : {props.slotNo}</p>
        <p>VehicleNumber : {props.vehicleNum}</p>
        <p>VehicleType : {props.vehicleType}</p>
    </div>
    );
}

export default VehicleInfo;