import rightUp from "../assets/icon _arrow right up_.svg";
import down from "../assets/down-icon-512x294-3o0g6g0d 1.svg";
import { useState } from "react";
function Scdescriptor({title, description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", date}) {
    const [view, setView] = useState(false);
    const handleClick = () => {
        setView(!view);
    }
    return (
        <div>
            <h1 className="jetbrains-mono-yuh stroketext" style={{fontSize:"30px", fontWeight:"bold"}}>
                <a className="naked" href="https://github.com/">{title || "Super Great Project"} <img src={rightUp}></img></a>
            </h1>
            <h2 className="jetbrains-mono-yuh my-4" style={{fontSize:"18px", fontWeight:"bold"}}>{date || "March 2018"}</h2>
            <p className="inter-love" style={{fontSize:"16px", lineHeight:"25px"}}> {!view ?  description.substring(0,description.substring(0, 371).lastIndexOf(" "))+"..." : description}</p>
            <button 
                className="d-block p-0 unbutton" 
                style={{fontSize:"16px", fontWeight:"bold", marginTop:"-10px"}}
                onClick={handleClick}
            >
                View {!view? "more": "less"}
            <img className="ms-1" src={down}></img></button>
        </div>
    )
}

export default Scdescriptor;