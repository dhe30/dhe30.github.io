import { Link } from "react-router-dom";
import {ReactComponent as Arrow} from "../assets/rightarrow.svg";
import { useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { useIntersection } from "../hooks/useIntersection";

export default function SpecialLink({show, path, seeAll, title, smaller}) {
    const { width } = useWindowSize();
    const ref = useRef();
    const newShow = useIntersection(ref, "-150px");
    const useShow = width <= 768 ? newShow : show;
    return (
        <Link ref={ref} to={path} className="d-inline-block">
            {/* <div className="white-block d-inline-block"> */}
            <h1 className="istok-web-regular d-inline white-block">{ title  }</h1>
            {/* </div> */}
            {seeAll && 
                <div
                    className={`inria-sans-regular-italic ms-2 see-it-all ${useShow ? "see-all-animation" : "see-all"}`}
                 style={{display:"inline-block"}}
                >see all</div>
            }
            <div
                className={`ms-1 mb-1 special-link d-inline-block ${useShow ? "special-link-animation" : seeAll && "see-all-test"}`}
                style={{
                    verticalAlign:"baseline",
                    position:"relative",
                    scale:`${smaller && 0.8}`,
                    // backgroundColor:`${smaller && "#ee99ff"}`

                }}
            >
                <Arrow 
                    // stroke="#ffffff"
                    className={` twofiveeaseinout ${useShow ? "special-link-button-animation" : "special-link-button"}`}
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