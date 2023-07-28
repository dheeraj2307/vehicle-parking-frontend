import Button from "./Button";
import ViewButton from "./ViewButton";

function Header(props){

    var styles = props.theme==="false"?null:{backgroundColor: "white"};

    return(
        <div className="headerBar" style={styles}>
            <Button id="homeButton" classes="headings" content="VEHICLE PARKING"></Button>
            <Button id ="about" classes="headings leftHeadings" content="ABOUT"></Button>
            <Button id = "contact" classes="headings leftHeadings" content="CONTACT US"></Button>
            <Button id ="signin" classes="headings leftHeadings" content="SIGN IN"></Button>
            <ViewButton id ="changeMe" classes="headings leftHeadings" content="VIEW" theme={props.theme} setTheme={props.setTheme}></ViewButton>
        </div>
    );
}

export default Header;