import left from "../assets/left.svg";
function Back() {
    return (
        <div style={{padding:"10px 0 28px 0"}}>
            <button className="unbutton" style={{marginLeft:""}}>
                <img alt="" src={left} style={{marginTop:"-7px"}}></img>
                <span className="inria-sans-regular ps-2" style={{fontSize:"18px", fontWeight:"400px"}}>Back</span>
            </button>
        </div>
    )
}

export default Back;