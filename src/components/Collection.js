import { Badge, Col, Row } from "react-bootstrap";
import '../index.css';
import arrow from "../assets/rightarrow.svg";
import GreyTag from "./GreyTag";
function Collection() {
    return (
        <Row>
            <Col className="test pb-3" xs="auto">
                    <img 
                        alt="" 
                        style={{
                            objectFit: "cover",
                            width: "364px",
                            height: "254px",
                            borderRadius: "10px",
                        }} 
                        src={require("../assets/taxim.png")}></img>
            </Col>
            <Col style={{minWidth:"300px"}}>
                <span className="test istok-web-regular" style={{display: "block"}}>
                    <h1 className="test me-2" style={{display: "inline-block"}}>Web Dev</h1>
                    <img 
                        className="test" 
                        alt="" 
                        src={arrow}
                        style={{marginTop:"-15px"}}
                    ></img>
                    <span className="inria-sans-regular-italic ms-2" style={{fontSize:"16px"}}>see all</span>
                </span>
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