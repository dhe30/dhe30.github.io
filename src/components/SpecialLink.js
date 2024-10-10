import { Link } from "react-router-dom";
import {ReactComponent as Arrow} from "../assets/rightarrow.svg";
import { useState } from "react";

export default function SpecialLink({show, path, seeAll, title}) {
    return (
        <Link to={path} className="d-inline-block">
            {/* <div className="white-block d-inline-block"> */}
            <h1 className="istok-web-regular d-inline-block test white-block">{ title  }</h1>
            {/* </div> */}
            {seeAll && 
                <div
                    className={`inria-sans-regular-italic ms-2 see-it-all ${show ? "see-all-animation" : "see-all"}`}
                 style={{display:"inline-block"}}
                >see all</div>
            }
            <div
                className={`ms-1 mb-1 special-link d-inline-block  test-block ${show ? "special-link-animation" : seeAll && "see-all-test"}`}
                style={{
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