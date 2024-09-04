import right from "../assets/right.svg";
function Crumbs({crumbs}) {
    const test = crumbs || ["Home", "Projects", "Collections"];
    return (
        <div className="mb-5">
            <span className="crumbs jetbrains-mono-yuh" style={{fontSize: "24px"}}>
                {test.map((elem, index) => {
                    return (
                        index < test.length-1 && <span>{elem} <img src={right} alt="" style={{margin: "0 6px 5px -7px"}}></img></span>
                    )
                })}
            </span>
            <span className="jetbrains-mono-yuh" style={{fontSize: "56px", marginTop:"-8px", display:"block"}}>{test[test.length-1]}</span>
        </div>
    );
}

export default Crumbs;