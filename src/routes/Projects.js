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
import ProjectWrapper from "../components/ProjectWrapper";


export default function Projects() {
    const { width } = useWindowSize();
    return (
        <ProjectWrapper wid={1025}>
            <Crumbs crumbs={["Home", "Projects", "Collections", "WebDev"]}></Crumbs>
            <Row className="justify-content-center p-0 m-0">
                <Col className="pb-4" xs="auto">
                    <Col className="" style={{maxWidth:"550px"}} xs="12">
                        <Keywords keywords={["Code", "Code2"]}></Keywords>
                    </Col>
                    <Showcase></Showcase>
                </Col>
                <Col className="" style={{minWidth:"250px", maxWidth:"550px"}}>
                    <Scdescriptor></Scdescriptor>
                </Col>
            </Row>
        </ProjectWrapper>
    )
}