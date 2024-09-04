import Crumbs from "../components/Crumbs";
import Collection from "../components/Collection";
import MiniCollections from "../components/MiniCollections";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Back from "../components/Back";
import Filter from "../components/Filter";
import Breadish from "../components/Breadish";

import useWindowSize from "../hooks/useWindowSize";

export default function Collections() {
    const { width } = useWindowSize();

    return (
            <Container fluid className="test d-flex justify-content-center p-0 m-0">
                <Row className="mx-3 mx-sm-3 mx-md-4" style={{maxWidth:"1200px"}}>
                <Back></Back>
                <Col className="" xs="auto">
                    <div>
                    {width < 1085 && <Filter></Filter>}
                    <Breadish></Breadish>
                    </div>
                </Col>
                <Col className="test">
                    <Crumbs crumbs={["Home", "Projects", "Collections"]}></Crumbs>
                    <Collection></Collection>
                    <div className="ps-4 mx-auto" style={{borderLeft:"3px dashed black", width:"fit-content"}}>
                        <MiniCollections></MiniCollections>
                        <MiniCollections></MiniCollections>
                    </div>
                </Col>
                {width >= 1085 && 
                    <Col xs="auto" className="test">
                    <Filter></Filter>
                    </Col>
                }
                </Row>
            </Container>
    )
}