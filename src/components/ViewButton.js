
function ViewButton(props){

    const theme=props.theme;
    const setTheme=props.setTheme;

    function handleClick(event){
        const prevTheme = event.target.value;
        console.log(prevTheme);
        setTheme(prevTheme==="false"?"true":"false");
    }

    return(
        <button id={props.id} className={props.classes} onClick={handleClick} value={theme}>{props.content}</button>
    )
}

export default ViewButton;