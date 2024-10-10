import { Badge, Col, Row } from "react-bootstrap";
import '../index.css';
import arrow from "../assets/rightarrow.svg";
import GreyTag from "./GreyTag";
import { Link } from "react-router-dom";
import SpecialLink from "./SpecialLink";
import { useState } from "react";
function Collection({title, image}) {
    const [show, setShow] = useState()
    return (
        <Row className="m-0 pt-5" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <Col className="test m-0 p-0 pb-3" xs="auto">
                    <img 
                        alt="" 
                        style={{
                            objectFit: "cover",
                            width: "364px",
                            height: "254px",
                            borderRadius: "10px",
                        }} 
                        src={require(`../assets/${image || "taxim.png"}`)}></img>
            </Col>
            <Col style={{minWidth:"300px"}}>
                
                    <SpecialLink show={show} path={title.toLowerCase() || "/"} title={title} seeAll={true}></SpecialLink>
                
                <p className="test" style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="test mb-3 tag-on" style={{marginTop:"-5px"}}>
                    <GreyTag></GreyTag>
                    <GreyTag></GreyTag>
                    <GreyTag></GreyTag>
                    <GreyTag></GreyTag>
                </div>
            </Col>
        </Row>
    )
}

export default Collection;