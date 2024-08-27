import close from "../assets/close.svg"
function GreyTag({purpify, contents, yas}) {
    return (
        <div className={`grey-tag ${purpify? "purpify": ""}`} style={{paddingTop:"-20px"}}>
            <span style={{display:"inline-block",marginTop:"-30px"}}>
                {contents || "TagThree"}
                {purpify && <button className="unbutton purple ms-2 gas" onMouseDown={yas} onClick={()=>purpify(contents)}><img style={{marginLeft:"20%"}} alt="" src={close}></img></button>}
            </span>
        </div>
    );
}
export default GreyTag;