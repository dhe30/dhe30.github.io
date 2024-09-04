// import { useState } from "react";
import { useRef, useState } from "react";
import filter from "../assets/filter.svg";
import GreyTag from "./GreyTag";
function Filter() {
    // const [tags, setTags] = useState([]);
    const destory = (tag) => {
        console.log(`destroy ${tag}`);
    }

    const wordBank = ["React.js", "Java", "JavaScript"];
    const [resultsClicked, setResultsClicked] = useState(false);
    const [tagsClicked, setTagsClicked] = useState(false);
    const [showBox, setShowBox] = useState(false);
    const [results, setResults] = useState([]);
    const [tags, setTags] = useState(["ss"]);
    const [isFocused, setIsFocused] = useState(false);
    const [search, setSearch] = useState("");
    const [beforeClick, setBeforeClick] = useState(false);

    const removeTag = (tag) => {
        tags.splice(tags.indexOf(tag),1);
        setTags([...tags]);
        if (isFocused) inputRef.current.focus();
    }

    const addTag = (tag) => {
        if (!tags.includes(tag)) {
            setTags([...tags, tag]);
        }
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value);
        const newRes = [];
        for (const elem of wordBank) {
            if ((elem.toLowerCase()).includes((e.target.value).toLowerCase()) && (elem.toLowerCase()).slice(0,1) === ((e.target.value).toLowerCase()).slice(0,1)) {
                newRes.push(elem);
                if (newRes.length === 3) break;
            }
        }
        setResults(newRes);
        console.log("handlechangetriggered");
    }

    const handleOnBlur = (e) => {
        console.log("handleblurtriggered");
        setResultsClicked(false);
        setTagsClicked(false);
        setIsFocused(false);
        if (resultsClicked) {
            setTimeout(() => {
                inputRef.current.focus();
                setIsFocused(true);
              }, 0);            
            console.log(3);
        } else if (tagsClicked) {
            console.log("itsme", isFocused)
            // if (isFocused) {
                inputRef.current.focus();
                setIsFocused(true);

            // }
        } else if (search.length > 0) {
            setIsFocused(false);
            console.log("prow")
        } else {
            setShowBox(false);
            // inputRef.current.focus();
            console.log(4);
        }
        console.log(2);
        // inputRef.current.focus();
        //if statement to catch if results are showing 
    }

    const handleOnMouseDown = () => {
        if (showBox) {
            setBeforeClick(true);
        }
    }
    const handleOnClick = () => {
        if (!beforeClick) {
            console.log("handleclicktriggered");
            setShowBox(true);
            setIsFocused(true);
            inputRef.current.style.display = "";
            setTimeout(() => {
                inputRef.current.focus();
            }, 1);  
        } else {
            setBeforeClick(false);
            setShowBox(false);
        }
    }

    const handlePreBlur = () => {
        console.log("handlepretriggered");
        setTagsClicked(true);
    }
    const handleResults = (tag) => {
        console.log("handleresultstriggered");
        setResultsClicked(true);
        setSearch("");
        addTag(tag);
        inputRef.current.focus();
        console.log(1);
    }
    const inputRef = useRef(null);

    return ( 
        <div className="mb-4" style={{width:"189px", position:"relative"}}>
            <img alt="" src={filter} className="mb-2"></img>
            <span className="inria-sans-regular" style={{fontSize:"18px"}}>Filter</span>
            <button type="reset" style={{position:"absolute", right:"0", fontSize:"16", marginTop:"5px"}} className="ms-auto inria-sans-regular-italic unbutton">clear</button>
            <div style={{display:"flex", flexWrap:"wrap", gap:"10px"}} className="mb-3">
                {tags.map((elem) => 
                    <GreyTag 
                        purpify={removeTag} 
                        contents={elem} 
                        yas={handlePreBlur}
                    ></GreyTag>
                )}
                <button 
                  type="button" 
                  className={`unbutton nunito-regular ${showBox ? "filter-buttoHov filter-buttonV2" : "filter-button"}`}
                  style={{width: "30px", height: "30px", borderRadius: "15px", border: "1px solid #DB96F3", fontSize:"28px", transition:"0.15s", marginTop:"2px"}}
                  onClick={handleOnClick}
                  onMouseDown={handleOnMouseDown}
                >
                    <span style={{display:"block", marginTop:"-9px"}}>+</span>
                </button>
            </div>
            <form className="mb-1">
                <input 
                    type="text" 
                    name="search" 
                    className={`input-sizing-color px-3 pb-1 ${showBox ? '' : 'no'}`}
                    placeholder="Add tag..."
                    onBlur={handleOnBlur}
                    onChange={handleOnChange}
                    onClick={()=>{setIsFocused(true)}}
                    value={search}
                    ref={inputRef}
                ></input>
            </form>    
            {(showBox && results && search.length > 0 && isFocused) &&
                results.map((elem) => {
                    return (
                        <button className="results test unbutton px-3" type="button" onMouseDown={()=>handleResults(elem)}>{elem}</button> 
                    )
                })

            }
        </div>
    )
}
export default Filter;