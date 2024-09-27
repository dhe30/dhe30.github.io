import right from "../assets/right.svg";
import whiteRight from "../assets/icon _right_.svg";
function Crumbs({crumbs, white}) {
    const test = crumbs || ["Home", "Projects", "Collections"];
    return (
        <div className="">
            <span className="crumbs jetbrains-mono-yuh" style={{fontSize: "18px", color:`${white?"white":""}`}}>
                {test.map((elem, index) => {
                    return (
                        index < test.length-1 && <span style={{display:"inline-block"}}>{elem} <img src={white? whiteRight: right} alt="" style={{margin: "0 6px 5px -7px"}}></img></span>
                    )
                })}
            </span>
            <span className="jetbrains-mono-yuh" style={{fontSize: "56px", marginTop:"-8px", display:"block", lineHeight:"70px", color:`${white?"white":""}`}}>{test[test.length-1]}</span>
        </div>
    );
}

export default Crumbs;