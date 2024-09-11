import { useState } from "react";
import {ReactComponent as SoftSlope} from "../assets/Vector (1).svg";
import {ReactComponent as WhiteRight} from "../assets/icon _right_.svg";
import Filter from "./Filter";
import Breadish from "./Breadish";
export default function MenuModal({tags, setTags}) {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    return (
        <div className="m-0 p-0 modal-div">
            <button className={`modal-button unbutton animation ${show? "no-more-display" :""}`}
             onClick={handleClick}
             style={{display:`${show?"":""}`}}
            >
                <SoftSlope width={50} height={50}></SoftSlope>
            </button>
            
                <div className={`basic-modal ${show? "animatronics" : "no-more-display"}`}>
                    <div className="modal-contents mb-4 pt-2 px-2">
                        <Filter tags={tags} setTags={setTags}></Filter>
                        <button className="unbutton modal-close-button" onClick={handleClick}><WhiteRight></WhiteRight></button>
                    </div>

                </div>
            
        </div>
    )
}