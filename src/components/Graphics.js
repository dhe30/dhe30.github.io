import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Graphics({image, title, date, description}) {
    useEffect(() => {
        setTimeout(()=>{
            window.dispatchEvent(new Event('resize'))
        }, 1)


        // console.log("sjiwbudbyebdy")
    },[])
    const width = useRef();
    return (
        <Container className="m-0">
            <Row className="test justify-content-center">
                <Col xs="auto" ref={width} className="glass-pane p-1">
                    <img className="wrap-text" src={require(`../assets/graphics/${image || "T4780203 1.png"}`)}></img>        
                </Col>
                <Col xs="" className="glass-pane py-2" style={{maxWidth:`${width.current? width.current.offsetWidth:""}px`}}>
                <span className="align-top inter-love">
                        <span className="fonty-smallest"> <span className="black-diamonds">&#9670;</span> title <span className="black-diamonds">&#9670;</span></span>
                        <h1 className="fonty-large inter-love"> {title || "“picasso in fontainebleau”"}</h1>
                        <span className="inika-regular">
                            <span className="fonty-small d-block">{date || 2022}, Pixel On Screen</span>
                            <span className="fonty-small d-block py-3">Overview</span>
                            <p>
                            {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"}
                            </p>
                        </span>
                    </span>
                </Col>
            </Row>
        </Container>
    )
}