import { useEffect, useState } from "react";
import useWheel from "../../hooks/useWheel";

export default function ScrollAnimator({children, delay, fixer}) {
    const [show, setShow] = useState();
    const { speed, pos } = useWheel();
    const [freeze, setFreeze] = useState(false);
    const [id, setId] = useState(0);

    // const handleShow = (value) => {
    //     if (!freeze) {
    //         setShow(value);
    //         setFreeze((freeze) => !freeze);
    //         setInterval(() => {
    //             setFreeze((freeze) => false);
    //         }, 1000);
    //     } 
    // }
    const moonLanding = new Date('July 20, 69 20:17:40 GMT+00:00');

    useEffect(()=> {
        // clearTimeout(id);
        const identification = id;
        if (speed < -0.2 && pos > 80) {
            // console.log("clearing: ", id)
            clearTimeout(id);
            setShow(false);
            // setFreeze((freeze) => true);
            // const id = setInterval(setFreeze((freeze) => false), 3000);
        }  else if (speed == 0){
            clearTimeout(id);
            console.log("INITIYATING: ", Date.now());
            setId((id) => setTimeout(()=> setShow(true), 1000));
        }
        return () => {
            clearTimeout(identification);
            // console.log("DID YOU CLEAR THISO ONE: ", identification);
        }
    }, [speed])

    return (
        <>
        <div 
            className={`nav-trans ${show? 'nav-mask-show' : pos > 90? 'nav-mask-hide': 'nav-mask-show'}`}
            style={{transitionDelay:`${show ? delay : 0}s`, zIndex:"2", ...fixer}}
        >
            {/* {""+show + " " + freeze} */}
            {children}
        </div>
        </>
    )
}