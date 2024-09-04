import Showcase from "../components/Showcase";
import Keywords from "../components/Keywords";
import Scdescriptor from "../components/Scdescriptor";
import Crumbs from "../components/Crumbs";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Back from "../components/Back";
import Filter from "../components/Filter";
import Breadish from "../components/Breadish";

import useWindowSize from "../hooks/useWindowSize";


export default function Projects() {
    const { width } = useWindowSize();
    return (
            <Container fluid className="test d-flex justify-content-center p-0 m-0">
                <Row className="mx-3 mx-sm-3 mx-md-4" style={{maxWidth:"1200px"}}>
                <Back></Back>
                <Col className="" xs="auto">
                    <div>
                    {width < 1025 && <Filter></Filter>}
                    <Breadish></Breadish>
                    </div>
                </Col>
                <Col className="">
                    <Container className="">
                            <Row className=" justify-content-center">
                                <Col className="" xs="12" style={width <1276? {}:{}}>
                                    <Crumbs crumbs={["Home", "Projects", "Collections", "Web Dev"]}></Crumbs>
                                </Col>
                                <Col className="pb-4 " xs="auto">
                                    <Col className="" style={{maxWidth:"550px"}} xs="12">
                                        <Keywords keywords={["Code", "Code2"]}></Keywords>
                                    </Col>
                                    <Showcase></Showcase>
                                </Col>
                                <Col className="" style={{minWidth:"250px", maxWidth:"550px"}}>
                                    <Scdescriptor></Scdescriptor>
                                </Col>
                            </Row>
                    </Container>
                </Col>
                {width >= 1025 && 
                    <Col xs="auto" className="">
                    <Filter></Filter>
                    </Col>
                }
                </Row>
            </Container>
    )
}