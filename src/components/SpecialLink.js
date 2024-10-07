import { Link } from "react-router-dom";
import {ReactComponent as Arrow} from "../assets/rightarrow.svg";
import { useState } from "react";

export default function SpecialLink(path) {
    const [show, setShow] = useState()
    return (
        <Link to={path} className="" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <h1 className="istok-web-regular d-inline-block test">Title</h1>
            <div
                className={`ms-1 mb-1 special-link d-inline-block  test-block ${show && "special-link-animation"}`}
                style={{
                    // height:"15px",
                    // width:"15px",
                    verticalAlign:"baseline",
                    position:"relative"

                }}
            >
                <Arrow 
                    // stroke="#ffffff"
                    className={` twofiveeaseinout ${show ? "special-link-button-animation" : "special-link-button"}`}
                    alt="" 
                    style={{
                        position:"absolute",
                        left:"-13px",
                        top:"-13px"
                    }}
                    ></Arrow>

            </div>
        </Link>
    )
}