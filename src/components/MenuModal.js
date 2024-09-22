import { useState } from "react";
import {ReactComponent as FilterIcon} from "../assets/filter-funnel-sort-sorting-conversion-currency-money-svgrepo-com.svg";
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
                {/* <SoftSlope width={50} height={50}></SoftSlope> */}
                {/* <WhiteRight></WhiteRight> */}
                {/* <span className="varela-round-regular d-block" style={{verticalAlign:"top", lineHeight:"5px", fontWeight:""}}>filtr.</span> */}
                <FilterIcon width={35} height={35}/>
                
            </button>
            
                <div className={`basic-modal ${show? "animatronics" : "no-more-display"}`}>
                    <div className="modal-contents mb-4 pt-2 px-2">
                        <Filter tags={tags} setTags={setTags}></Filter>
                        <button className="unbutton modal-close-button modal-close-shape" onClick={handleClick}><WhiteRight></WhiteRight></button>
                    </div>

                </div>
            
        </div>
    )
}