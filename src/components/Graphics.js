import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Graphics({image, title, date, description}) {
    const width = useRef();
    return (
        <Container className="m-0">
            <Row className="justify-content-center">
                <Col xs="auto" ref={width} className="glass-pane p-1">
                    <img className="wrap-text" src={require(`../assets/${image || "T4780203 1.png"}`)}></img>        
                </Col>
                <Col xs="auto" className="glass-pane py-2 make-exists" style={{maxWidth:`${width.current? width.current.offsetWidth:""}px`}}>
                    <span className="align-top inter-love">
                            <span className="fonty-smallest"> 
                                <span className="black-diamonds">
                                    &#9670;
                                </span> 
                                title 
                                <span className="black-diamonds">
                                    &#9670;
                                </span>
                            </span>
                            <h1 className="fonty-large inter-love"> {title || "“picasso in fontainebleau”"}</h1>
                            <span className="inika-regular d-block">
                                <span className="fonty-small d-block">{date || 2023}, Pixel On Screen</span>
                                <span className="fonty-small d-block py-3">Overview</span>
                                <p style={{minWidth:"250px"}}>
                                    <span style={{whiteSpace:"pre-wrap"}}>
                                        {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"}
                                    </span>
                                </p>
                            </span>
                    </span>
                </Col>
            </Row>
        </Container>
    )
}