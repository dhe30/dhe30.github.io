import Crumbs from "../components/Crumbs";
import Collection from "../components/Collection";
import MiniCollections from "../components/MiniCollections";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Back from "../components/Back";
import Filter from "../components/Filter";
import Breadish from "../components/Breadish";

import useWindowSize from "../hooks/useWindowSize";

export default function ProjectWrapper({wid, children}) {
    const { width } = useWindowSize();
    const [crumb, setCrumb] = useState([]);
    return (
        <Container fluid className="test d-flex justify-content-center p-0 m-0">
                <Row className="mx-3 mx-sm-3 mx-md-4" style={{maxWidth:"1200px"}}>
                <Back></Back>
                <Col className="" xs="auto">
                    <div>
                    {width < wid && <Filter></Filter>}
                    <Breadish></Breadish>
                    </div>
                </Col>
                <Col className="">
                    {children}
                </Col>
                {width >= wid && 
                    <Col xs="auto" className="">
                    <Filter></Filter>
                    </Col>
                }
                </Row>
            </Container>
    )
}