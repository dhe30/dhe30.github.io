import { Col, Container, Row } from "react-bootstrap";
import gmail from "../assets/icons8-email-30.png";
import linkedin from "../assets/icons8-linkedin.svg";
import github from "../assets/icons8-github.svg";
import arrow from "../assets/icons8-rightward-up-arrow-24.png";
import down from "../assets/download-svgrepo-com.svg";
import useWindowSize from "../hooks/useWindowSize";
import { Link } from "react-router-dom";

export default function Foot() {
    const {width } = useWindowSize();
    return (
        <Container fluid className="no-overflowX">
            <Row className="footer no-overflowX d-flex justify-content-between m-0 p-0 py-5 px-xs-0 px-sm-3 px-md-4 px-lg-5">
                <Col className="">
                <div className="d-block" style={{position:"relative", width:"480px", height:"150px"}}>
                    <span 
                    className="p-absolute text-outline footer-foot inter-love footer-foot-weight d-block"
                    style={{preWrap:"no-wrap",position:"absolute", top:"-30px"}}
                    >
                        /dhe30
                    </span>
                
                </div>
                </Col>
                <Col className="xs-auto pb-3" style={{maxWidth:"200px"}}>
                    <h5 className="jetbrains-mono-yuh footer-label" style={{}}>nav</h5>
                    <span className="mb-1 jetbrains-mono-yuh with-icon d-block">
                    <Link to="/">collections</Link>
                        <img src={arrow} height={15} style={{verticalAlign:"baseline"}}></img>
                    </span>
                    <span className="mb-1 jetbrains-mono-yuh with-icon d-block">
                    <Link to="/graphics">graphics</Link>

                        <img src={arrow} height={15} style={{verticalAlign:"baseline"}}></img>
                    </span>
                    <span className="mb-1 jetbrains-mono-yuh with-icon d-block">
                        <Link to="/webdev">webdev</Link>
                        <img src={arrow} height={15} style={{verticalAlign:"baseline"}}></img>
                    </span>
                    <span className="mb-1 jetbrains-mono-yuh with-icon d-block">
                        <a href='https://grasscompany.tech/pdf/resume.pdf'>resume</a> 
                        <img src={down} height={15} style={{verticalAlign:""}}></img>
                    </span>
                </Col>
                <Col className="xs-12 d-flex align-content-start d-flex justify-content-between flex-wrap" style={{maxWidth:`${width > 1070?"300px":""}`}}>
                    <h5 className="jetbrains-mono-yuh footer-label  me-2">contact . socials</h5>
                    <span className="mb-1  me-2 jetbrains-mono-yuh with-icon d-inline-block">
                    <img className=" me-2" src={gmail} height={20} style={{verticalAlign:"-4px"}}></img>
                       <a href="mailto:daniel.he.2@stonybrook.edu">daniel.he.2@stonybrook.edu</a>
                    </span>
                    <span className="mb-1  me-2 jetbrains-mono-yuh with-icon">
                    <img className="me-2" src={linkedin} height={20} style={{verticalAlign:"-4px"}}></img>
                        <a href="https://www.linkedin.com/in/dhe30/">linkedin.com/in/dhe30</a>
                    </span>
                    <span className="mb-1  me-2 jetbrains-mono-yuh with-icon">
                    <img className="me-2" src={github} height={20} style={{verticalAlign:"-4px"}}></img>
                    <a href="https://github.com/dhe30">github.com/dhe30</a>
                    </span>
                </Col>
                <Col xs="12" className="jetbrains-mono-yuh">
                <hr/>
                &copy; 2024 Daniel He. All Rights Reserved. Made with React</Col>
            </Row>
            
        </Container>
    )
}