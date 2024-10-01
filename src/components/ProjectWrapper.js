import Crumbs from "../components/Crumbs";
import Collection from "../components/Collection";
import MiniCollections from "../components/MiniCollections";
import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Back from "../components/Back";
import Filter from "../components/Filter";
import Breadish from "../components/Breadish";

import useWindowSize from "../hooks/useWindowSize";
import MenuModal from "./MenuModal";
import { useOutletContext } from "react-router-dom";
import { QueryContext, TagContext } from "../store/TagContext";
import ScrollAnimator from "./wrappers/ScrollAnimator";
import NavDown from "./wrappers/NavDown";

export default function ProjectWrapper({wid = 1200, restrictionAbove1025 = 0, children}) {
    const { width } = useWindowSize();
    const [crumb, setCrumb] = useState([]);
    const [tags, setTags, show] = useOutletContext();
    const [loading, setLoading] = useState(true);
    const wither = useRef();
    // useEffect(() => {

    // }, [])
    return (
        <Container fluid className=" d-flex justify-content-center p-0 m-0 p-relative">
                <Row className=" test mx-3 mx-sm-3 mx-md-4" style={{maxWidth:"1300px"}}>
                <Back></Back> 
                { width > 800 ?
                    <Col className="position-relative" xs="auto" style={{minWidth:"170px"}}>
                        {/* <div className="test" style={{position:"absolute", top:"-90px", width:"100%", height:"100%"}}>
                        <div className="test" style={{height:"90px", position:"sticky", top:`${show? 0:-90}px`, transition: "top 0.15s"}}>
                            <div className="test" style={{position:"absolute", bottom:"-90px"}}> */}
                            <NavDown delay={0.25}>
                            {/* {""+show} */}
                            <Breadish></Breadish>
                            {width < wid && <Filter tags={tags} setTags={setTags}></Filter>}
                            </NavDown>
                            {/* </div>
                        </div>
                        </div> */}
                    </Col>
                    : 
                    // <div className="" style={{position:"absolute", top:"55px", height:"100%"}}>
                        <MenuModal tags={tags} setTags={setTags}></MenuModal>
                    // </div>
                }
                <Col ref={wither} className="" style={{position:"relative", maxWidth:`${width > 800? width > 1025? width - (restrictionAbove1025 || 415) + "px":width - 250 + "px":""}`}}>
                {/* {width > 800? width - 250:""} */}
                        {children}
                </Col>
                {width >= wid && 
                    <Col xs="auto" className="position-relative" style={{minWidth:"215px"}}>
                        {/* <div className="sticky-top p-0 m-0" style={{top:"1rem"}} > */}

                        <NavDown delay={0.25}>
                                <Filter tags={tags} setTags={setTags}></Filter>
                        </NavDown>
                        {/* </div> */}

                    </Col>
                }
                </Row>
            </Container>
    )
}