const { useState, useLayoutEffect } = require("react");

function useWindowSize() {
    const [size, setSize] = useState({width: 0, height: 0}); 
    const setWindowSize = () => {
        setSize({
            width: window.innerWidth, 
            height: window.innerHeight
        })
    }

    useLayoutEffect(() => {
        setWindowSize();
        window.addEventListener('resize', setWindowSize);
        return () => {
            window.removeEventListener('resize', setWindowSize);
        }
    },[]);

    return size;
}

export default useWindowSize;