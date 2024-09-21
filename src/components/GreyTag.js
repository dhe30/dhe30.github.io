import close from "../assets/close.svg"
function GreyTag({purpify, contents, yas}) {
    return (
        <div className={`grey-tag ${purpify? "purpify": ""}`} style={{}}>
            <span style={{display:"inline-block", verticalAlign:"top",lineHeight:"22px"}}>
                {/* <span style={{display:"inline-block", border:"1px solid red"}}> */}
                    {contents || "TagThree"}
                {/* </span> */}
                {purpify && <button className="unbutton purple ms-2 gas" onMouseDown={yas} onClick={()=>purpify(contents)}><img style={{marginLeft:"20%"}} alt="" src={close}></img></button>}
            </span>
        </div>
    );
}
export default GreyTag;