import { useState } from "react";
import {ReactComponent as SoftSlope} from "../assets/Vector (1).svg";
import {ReactComponent as WhiteRight} from "../assets/icon _right_.svg";
import Filter from "./Filter";
import Breadish from "./Breadish";
export default function MenuModal() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    return (
        <div className="m-0 p-0 test modal-div">
            <button className="modal-button unbutton"
             onClick={handleClick}
             style={{display:`${show?"none":""}`}}
            >
                <SoftSlope width={50} height={50}></SoftSlope>
            </button>
            
                <div className={`test basic-modal ${show? "animatronics" : "no-more-display"}`}>
                    <div className="test modal-contents mb-4 pt-2 px-2">
                        <Filter></Filter>
                        <button className="unbutton modal-close-button" onClick={handleClick}><WhiteRight></WhiteRight></button>
                    </div>

                </div>
            
        </div>
    )
}