import { useOutletContext } from "react-router-dom"
import useWheel from "../../hooks/useWheel";

export default function NavDown({children}) {
    const [,,show ] = useOutletContext();
    const { speed, pos } = useWheel();

    return (
        <div className={`p-0 m-0 nav-down-animation ${show && pos > 120 ? "nav-down":""}`}
            // style={{transform:`translateY(${show ? pos > 180? 36 : pos - 90: 0}px)`}}
        
        >
            {children}
        </div>
    )
}