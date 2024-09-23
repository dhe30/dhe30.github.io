import { Col, Row } from "react-bootstrap";
import '../index.css';
import arrow from "../assets/rightarrow.svg";
function MiniCollections({title}) {
    return (
        <Row className="pt-5 test">
            <Col className="test pb-3" xs="auto" style={{position:"relative"}}>
                    <img 
                        alt="" 
                        style={{
                            objectFit: "cover",
                            width: "190px",
                            height: "123px",
                            borderRadius: "10px"
                        }} 
                        src={require("../assets/map.png")}></img>
                    <div className="p-0 m-0" style={{height:"16px", width:"16px", border:"3px solid black", borderRadius:"8px", backgroundColor:"white", position:"absolute", top:"55px", left:"-23px"}}></div>
            </Col>
            <Col style={{maxWidth:"434px"}}>
                <span className="test istok-web-regular" style={{display: "block"}}>
                    <h2 className="test me-2 inria-sans-regular" style={{display: "inline-block", fontSize: "24px"}}>March 2017</h2>
                    <h1 className="test" style={{display: "inline-block", fontSize: "32px"}}><span className="me-2">{title || "Project One"}</span>
                    <img 
                        className="test" 
                        alt="" 
                        src={arrow}
                        style={{marginTop:""}}
                    ></img>
                    </h1>
                </span>
                <p style={{fontSize:"16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                <div></div>
            </Col>
        </Row>
    )
}

export default MiniCollections;