import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import {ReactComponent as Left} from "../assets/Frame 28.svg";
import {ReactComponent as Right} from "../assets/Frame 29.svg";
import {ReactComponent as Arrow} from "../assets/reshot-icon-head-down-left-J2RDS78GBL.svg";
import ShowcaseModal from "./ShowcaseModal";


function Showcase({clientWidth, imagers}) {
    const test = imagers || [
        {img:"Engram/EngramHome1.png", caption: "10"},
        {img:"Engram/EngramPrompt.png", caption: "1"},
        {img:"Engram/EngramLEQ.png", caption: "1"},
        {img:"Engram/EngramWrite.png", caption: "3"},
        {img:"Engram/EngramHard1.png", caption: "0"},
        {img:"Engram/prototype.png", caption: "0"},
    ]

    const { width } = useWindowSize();

    const two = useRef([]);
    const three = useRef([]);
    const four = useRef([]);
    const savedCallback = useRef();
    const limit = 1260;
    const heightRatio = 370;

    const [one,setOne] = useState([two,three,four]);
    const [images, setImages] = useState([minus(0),0,plus(0),])
    const [current, setCurrent] = useState(2);
    const [currentActual, setCurrentActual] = useState(0);
    const [freeze, setFreeze] = useState(false);
    const [reset, setReset] = useState(false);
    const [show, setShow] = useState(false);
    const [expand, setExpand] = useState(false);

    function tick() {
        savedCallback.current();
    }

    //for confusion as to why this is needed https://overreacted.io/making-setinterval-declarative-with-react-hooks/
    useEffect(() => {
        savedCallback.current = backward;
        return () => {
            ;
        }
      });

    useEffect(() => {
        const id = setInterval(tick, 5000);
        return () => {
            clearInterval(id);
        }
    }, [reset]);

    function plus(curr, num=1) {
        return (curr+num)%(test.length);
    }
    function minus(curr, num=1) {
        num=num%test.length;
        curr-=num; 
        return (curr < 0 ? test.length+(curr):curr);
    }

    const forward = () => {
        if (!(freeze || show)) {
            setFreeze(true);
            console.log(one);
            setCurrent(current - 1 < 0? 2: current-1);
            setCurrentActual(currentActual - 1 < 0? test.length-1: currentActual-1);
            one.forEach((element,index) => {
                if (index === 2) {
                    element.current.style.transition="";
                    one[2].current.style.transform=`translateX(${parseInt((element.current.style.transform?element.current.style.transform.substring(element.current.style.transform.indexOf("(")+1,element.current.style.transform.indexOf(")")-1):"0"))-200}%)`;
                    one.unshift(one.pop());
                    setOne(one);
                    images[current]=minus(images[current - 1 < 0? 2: current-1],2);
                    setImages(images);
                } else {
                    element.current.style.transform=`translateX(${parseInt((element.current.style.transform?element.current.style.transform.substring(element.current.style.transform.indexOf("(")+1,element.current.style.transform.indexOf(")")-1):"0"))+100}%)`;
                    element.current.style.transition="transform 0.5s ease-in-out";
                }
            });
            setTimeout(()=> {
                setFreeze(false);
                setReset(!reset);
            }, 500);
        }
    }
    const backward = () => {
        if (!(freeze || show)) {
            setFreeze(true);
            setCurrent((current + 1)%3);
            setCurrentActual((currentActual + 1)%test.length);
            one.forEach((element,index) => {
                if (index === 0) {
                    element.current.style.transition="";
                    one[0].current.style.transform=`translateX(${parseInt((element.current.style.transform?element.current.style.transform.substring(element.current.style.transform.indexOf("(")+1,element.current.style.transform.indexOf(")")-1):"0"))+200}%)`;
                } else {
                    element.current.style.transform=`translateX(${parseInt((element.current.style.transform?element.current.style.transform.substring(element.current.style.transform.indexOf("(")+1,element.current.style.transform.indexOf(")")-1):"0"))-100}%)`;
                    element.current.style.transition="transform 0.5s ease-in-out";
                }

            });
            one.push(one.shift());
            setOne(one);
            images[current-2 < 0? 3+(current-2):0]=plus(images[current - 1 < 0? 2: current-1],2)
            setImages(images);
            setTimeout(()=> {
                setFreeze(false);
                setReset(!reset);
            }, 500);
        }
    }

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }
    const handleMouseEnter = () => {
        setExpand(true);
    }
    const handleMouseLeave = () => {
        setExpand(false);
    }
    return (
        <div className="" style={{position:"relative"}}>
            {/* {clientWidth} */}
                <div 
                    style={{
                        position:"relative", 
                        overflow:"hidden",
                        width: `${width < limit ? width < 600 ? 520-(600-width):clientWidth:520}px`,
                        height: `${width < limit ? width < 600 ? ((520-(600-width))/520)*370:((clientWidth)/520)*370:370}px`,
                    }}
                    
                >
                <div 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleShow}
                    style={{position:"absolute", zIndex:"1", height:"100%", width:"64%", left:"18%"}}>
                </div>

                    <button 
                        className="robert unbutton" 
                        type="button"
                        style={{position:"absolute", zIndex:"1", height:"100%", width:"18%"}}
                        onClick={forward}
                    >
                        
                        <button 
                            className="unbutton" 
                            type="button" 
                            style={{
                                position:"absolute",
                                left:"0",
                                top: `${width < limit ? ((clientWidth)/520)*370/2:370/2}px`,
                                zIndex: "1"
                            }}
                        >
                            <Right className="despica"></Right>
                        </button>
                    </button>
                    <button 
                        className="roberta unbutton" 
                        type="button" 
                        style={{position:"absolute", right: 0, zIndex:"1", height:"100%", width:"18%"}}
                        onClick={backward}
                    >
                        <button 
                            className="unbutton" 
                            type="button" 
                            style={{
                                position:"absolute",
                                right:"0",
                                top: `${width < limit ? ((clientWidth)/520)*370/2:370/2}px`,
                                zIndex: "1"
                            }}
                        >
                            <Left className="despica" />
                        </button>
                    </button>
                     
                    
                    {/* <Arrow 
                        
                        style={{position:"absolute", zIndex:"1", top:"0", bottom:"0"}}
                    ></Arrow> */}
                    <Arrow 
                        height={40}
                        width={40}
                        className={`down-arrow expand-animation ${expand && "expand-anima-down"}`}
                    ></Arrow>
                    <Arrow 
                        height={40}
                        width={40}
                        className={`up-arrow expand-animation ${expand && "expand-anima-up"}`}
                    ></Arrow>
                    <img 
                        alt="" 
                        className="showcase-image"
                        style={{
                            objectFit: "cover",
                            width: `${width < limit ? width < 600 ? 520-(600-width):clientWidth:520}px`,
                        height: `${width < limit ? width < 600 ? ((520-(600-width))/520)*370:((clientWidth)/520)*370:370}px`,
                            position:"absolute",
                            top:"0",
                            left: `-${width < limit ? width < 600 ? 520-(600-width):clientWidth:520}px`,
                        }} 
                        src={require(`../assets/${test[images[0]].img}`)}
                        ref={two}
                    ></img>  
                    <img 
                        alt="" 
                        className="showcase-image"
                        style={{
                            objectFit: "cover",
                            width: `${width < limit ? width < 600 ? 520-(600-width):clientWidth:520}px`,
                        height: `${width < limit ? width < 600 ? ((520-(600-width))/520)*370:((clientWidth)/520)*370:370}px`,
                            position:"absolute",
                            top:"0",
                            left: "0"
                        }} 
                        src={require(`../assets/${test[images[1]].img}`)}
                        ref={three}
                    ></img>  
                    <img 
                        alt="" 
                        className="showcase-image"
                        style={{
                            objectFit: "cover",
                            width: `${width < limit ? width < 600 ? 520-(600-width):clientWidth:520}px`,
                        height: `${width < limit ? width < 600 ? ((520-(600-width))/520)*370:((clientWidth)/520)*370:370}px`,
                            position:"absolute",
                            top:"0",
                            left: `${width < limit ? width < 600 ? 520-(600-width):clientWidth:520}px`,
                        }} 
                        src={require(`../assets/${test[images[2]].img}`)}
                        ref={four}
                    ></img> 
                    <ShowcaseModal show={show} handleClose={handleClose} image={test[currentActual]}></ShowcaseModal> 
                </div>
                {/* <div>{test[curr].caption}</div> */}
            <div className="position-relative mt-2 showcase-image" style={{minHeight:"109px", textAlign:"center", fontSize:"12px", border:"1px solid #D5D5D5"}}>
                <span className="d-block pt-3 inter-love">{test[currentActual].caption}</span>
                <div className="position-absolute" style={{bottom:"0", left:"50%", transform: "translate(-50%, -50%)"}}>
                    {[...Array(test.length).keys()].map((elem) => {
                        return (<span className="dot" style={{backgroundColor: `${elem === currentActual ? "black":""}`}}></span>)
                     })}
                </div>
            </div>
        </div>
    )
}

export default Showcase;