import { useOutletContext } from "react-router-dom"
import useWheel from "../../hooks/useWheel";

export default function NavDown({children}) {
    const [,,show ] = useOutletContext();
    // const { speed, pos } = useWheel();

    return (
        <div className="p-0 m-0" style={{position:"absolute", top:"-90px", width:"100%", height:"100%", zIndex:"1"}}>
            <div className="d-flex justify-content-center" style={{height:"90px", position:"sticky", top:`${show? 0:-75}px`, transition: "top 0.25s"}}>
                <div className="p-0 m-0" style={{position:"absolute", bottom:"-6rem", height:"100%", width:"100%"}}>
                    {children}
                </div>
            </div>
        </div>
    )
}