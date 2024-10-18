import { Col, Row } from "react-bootstrap";
import '../index.css';
import arrow from "../assets/rightarrow.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import SpecialLink from "./SpecialLink";
function MiniCollections({path, title, image, description, date}) {
    const [show, setShow] = useState()
    return (
        <Row 
            className="m-0 p-0 test pt-5"
            style={{borderLeft:"3px dashed black"}}
            onMouseEnter={() => setShow(true)} 
            onMouseLeave={() => setShow(false)}
        >
            <Col className="test pb-3" xs="auto" style={{position:"relative"}}>
                    <img 
                        alt="" 
                        style={{
                            objectFit: "cover",
                            width: "190px",
                            height: "136px",
                            borderRadius: "10px",
                            objectPosition:"top"
                        }} 
                        src={require(`../assets/${image || "map.png"}`)}></img>
                    <div className="p-0 m-0" style={{height:"16px", width:"16px", border:"3px solid black", borderRadius:"8px", backgroundColor:"white", position:"absolute", top:"65px", left:"-10px"}}></div>
            </Col>
            <Col sm='12' className="sm-12 " style={{maxWidth:"434px"}}>
                <span className="test istok-web-regular" style={{display: "block"}}>
                    <h2 className="test me-2 inria-sans-regular" style={{display: "inline-block", fontSize: "24px"}}>{date || "March 2017"}</h2>   
                    <SpecialLink show={show} path={path.toLowerCase() + `#${title.replace(/\s/g, "")}`} title={title}></SpecialLink>
                </span>
                <p style={{fontSize:"16px", whiteSpace:"pre-wrap"}}>{description.replace(/\n|\r/g, " ").substring(0,description.replace(/\n|\r/g, " ").substring(0, 123).lastIndexOf(" "))+"..."||"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ..."}</p>
                <div></div>
            </Col>
        </Row>
    )
}

export default MiniCollections;