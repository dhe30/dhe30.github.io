import GreyTag from "./GreyTag";

function Keywords({keywords}) {
    return (
        <div className="mb-2 ps-2" style={{borderLeft: "1px solid #D5D5D5", width:"fit-content"}}>
            <div className="highlight inter-love" style={{fontSize:"18px", fontWeight: "bold"}}>
                KEYWORDS
            </div>
            <div className="tag-on mt-2 pb-2">
                {keywords.map((elem)=> 
                    <GreyTag contents={elem}></GreyTag>
                )}
            </div>
        </div>
    )
}

export default Keywords;