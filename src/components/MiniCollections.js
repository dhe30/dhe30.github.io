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
            className="m-0 p-0 pt-5  dashed-border"
            // style={{borderLeft:"3px dashed black",
            // }}
            onMouseEnter={() => setShow(true)} 
            onMouseLeave={() => setShow(false)}
        >
            <Col className="pb-3 ms-1" xs="auto" style={{position:"relative"}}>
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
                    <div className="p-0 m-0" style={{height:"16px", width:"16px", border:"3px solid black", borderRadius:"8px", backgroundColor:"white", position:"absolute", top:"65px", left:"-11px"}}></div>
            </Col>
            <Col style={{minWidth:"300px",maxWidth:""}}>
                <span className="istok-web-regular" style={{display: "inline-block"}}>
                    <h2 className="me-2 inria-sans-regular" style={{display: "inline-block", fontSize: "24px"}}>{date || "March 2017"}</h2>   
                    <SpecialLink smaller={true} show={show} path={path.toLowerCase() + `#${title.replace(/\s/g, "")}`} title={title}></SpecialLink>
                </span>
                <p className="" style={{fontSize:"16px", whiteSpace:""}}>{description.replace(/\n|\r/g, " ").substring(0,description.replace(/\n|\r/g, " ").substring(0, 123).lastIndexOf(" "))+"..."||"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ..."}</p>
                <div></div>
            </Col>
        </Row>
    )
}

export default MiniCollections;