import { useEffect, useState } from "react";

function useWheel() {
    const [scroll, setScroll] = useState({speed: 0, pos: 0});
    const setScrollSpeed = () => {
        const initial = window.scrollY;
        setTimeout(() => {
            const speed = (initial-window.scrollY)/150;
            // console.log(speed);
            setScroll({speed: speed, pos: window.scrollY});
        },150);
    }

    useEffect(() => {
        window.addEventListener("scroll", setScrollSpeed);
        return () => {
            window.removeEventListener("scroll", setScrollSpeed);
        }
    },[]);

    return scroll;
}

export default useWheel;