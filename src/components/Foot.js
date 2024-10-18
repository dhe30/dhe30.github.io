import { Col, Container, Row } from "react-bootstrap";
import gmail from "../assets/icons8-gmail.svg";

export default function Foot() {
    return (
        <Container fluid className="footer test">
            <Row className="test d-flex justify-content-between m-0 p-0 mx-xs-0 mx-sm-3 mx-md-4 mx-lg-5">
                <Col className="test test">
                <div className="d-block">
                <span className="test text-outline footer-foot inter-love footer-foot-weight with-icon">/
                <span className="test text-outline footer-foot inter-love footer-foot-weight">
                    dhe30
                </span>
                </span>
                
                </div>
                </Col>
                <Col className="xs-auto d-flex align-content-start flex-wrap" style={{maxWidth:"300px"}}>
                    <h5 className="jetbrains-mono-yuh footer-label">contact / socials</h5>
                    <span className="test jetbrains-mono-yuh with-icon d-inline-block">
                    <img className="test me-2" src={gmail} height={20} style={{verticalAlign:"-4px"}}></img>
                        daniel.he.2@stonybrook.edu
                    </span>
                    <span className="jetbrains-mono-yuh with-icon">
                    <img className="me-2" src={gmail} height={20} style={{verticalAlign:"-4px"}}></img>
                    daniel.he.2@stonybrook.edu
                    </span>
                    <span className="jetbrains-mono-yuh with-icon">
                    <img className="me-2" src={gmail} height={20} style={{verticalAlign:"-4px"}}></img>
                    daniel.he.2@stonybrook.edu
                    </span>
                </Col>
            </Row>
            
        </Container>
    )
}