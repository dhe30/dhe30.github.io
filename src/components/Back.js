import { useNavigate } from "react-router-dom";
import left from "../assets/left.svg";
function Back() {
    const navigate = useNavigate();
    return (
        <div className="" style={{padding:"10px 0 15px 0", zIndex:"2"}}>
            <button 
                className="unbutton" 
                // style={{marginLeft:""}} 
                type="button"
                onClick={() => {
                    navigate(-1);
                }}
            >
                <img alt="" src={left} style={{marginTop:"-7px"}}></img>
                <span className="inria-sans-regular ps-2" style={{fontSize:"18px", fontWeight:"400px"}}>Back</span>
            </button>
        </div>
    )
}

export default Back;