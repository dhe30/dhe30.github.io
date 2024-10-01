import { useOutletContext } from "react-router-dom"
import useWheel from "../../hooks/useWheel";

export default function NavDown({children}) {
    const [,,show ] = useOutletContext();
    // const { speed, pos } = useWheel();

    return (
        <div className="" style={{position:"absolute", top:"-90px", width:"100%", height:"100%", zIndex:"-1"}}>
            <div className="" style={{height:"90px", position:"sticky", top:`${show? 0:-90}px`, transition: "top 0.25s"}}>
                <div className="" style={{position:"absolute", bottom:"-6rem", height:"100%"}}>
                    {children}
                </div>
            </div>
        </div>
    )
}