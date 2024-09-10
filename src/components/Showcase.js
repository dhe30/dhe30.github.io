import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import left from "../assets/Frame 28.svg";
import right from "../assets/Frame 29.svg";

function Showcase({clientWidth}) {
    const test = [
        {img:"map.png", caption: "10"},
        {img:"spoiler.png", caption: "1"},
        {img:"spoiler.png", caption: "1"},
        {img:"map.png", caption: "3"},
        {img:"taxim.png", caption: "0"},
    ]

    const { width } = useWindowSize();

    const two = useRef([]);
    const three = useRef([]);
    const four = useRef([]);
    const savedCallback = useRef();
    const limit = 1235;
    const heightRatio = 370;

    const [one,setOne] = useState([two,three,four]);
    const [images, setImages] = useState([minus(0),0,plus(0),])
    const [current, setCurrent] = useState(2);
    const [currentActual, setCurrentActual] = useState(0);
    const [freeze, setFreeze] = useState(false);
    const [loop, setLoop] = useState();

    function tick() {
        savedCallback.current();
    }

    function resetTimer(id) {
        clearInterval(id);
        setLoop(setInterval(tick, 5000));
    }

    //for confusion as to why this is needed https://overreacted.io/making-setinterval-declarative-with-react-hooks/
    useEffect(() => {
        savedCallback.current = backward;
        // return () => {
        //     clearInterval(loop);
        // }
      });

    useEffect(() => {
        const id = setInterval(tick, 5000);
        setLoop(id);
        return () => {
            clearInterval(id);
        }
    }, []);

    function plus(curr, num=1) {
        return (curr+num)%(test.length);
    }
    function minus(curr, num=1) {
        num=num%test.length;
        curr-=num; 
        return (curr < 0 ? test.length+(curr):curr);
    }

    const forward = () => {
        if (!freeze) {
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
            }, 500);
        }
    }
    const backward = (callback=(loop)=>{}) => {
        if (!freeze) {
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
            }, 500);
            callback(loop);
        }
    }
    return (
        <div className="test" style={{position:"relative", width: "100%", backgroundColor:"red"}}>
            {/* {clientWidth} */}
                <div 
                    style={{
                        position:"relative", 
                        overflow:"hidden",
                        width: `${width < limit ? width < 600 ? 520-(600-width):clientWidth:520}px`,
                        height: `${width < limit ? width < 600 ? ((520-(600-width))/520)*370:((clientWidth)/520)*370:370}px`,
                    }}
                >
                     <button 
                        className="unbutton" 
                        type="button" 
                        onClick={()=>{backward(resetTimer)}}
                        style={{
                            position:"absolute",
                            right:"0",
                            top: `${width < limit ? ((clientWidth)/520)*370/2:370/2}px`,
                            zIndex: "1"
                        }}
                    >
                        <img src={left}></img>
                    </button>
                    <button 
                        className="unbutton" 
                        type="button" 
                        onClick={forward}
                        style={{
                            position:"absolute",
                            left:"0",
                            top: `${width < limit ? ((clientWidth)/520)*370/2:370/2}px`,
                            zIndex: "1"
                        }}
                    >
                        <img src={right}></img>
                    </button>
                    <img 
                        alt="" 
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
                </div>
                {/* <div>{test[curr].caption}</div> */}
            <div className="position-relative mt-2" style={{minHeight:"109px", textAlign:"center", fontSize:"12px", border:"1px solid #D5D5D5"}}>
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