import Crumbs from "../components/Crumbs";
import Collection from "../components/Collection";
import MiniCollections from "../components/MiniCollections";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Back from "../components/Back";
import Filter from "../components/Filter";
import Breadish from "../components/Breadish";

import useWindowSize from "../hooks/useWindowSize";
import MenuModal from "./MenuModal";
import { useOutletContext } from "react-router-dom";

export default function ProjectWrapper({wid, children}) {
    const { width } = useWindowSize();
    const [crumb, setCrumb] = useState([]);
    const [tags, setTags] = useOutletContext();
    return (
        <Container fluid className="test d-flex justify-content-center p-0 m-0 p-relative">
                <Row className="mx-3 mx-sm-3 mx-md-4 test" style={{maxWidth:"1300px"}}>
                <Back></Back> 
                { width > 800 ?
                    <Col className="test" xs="auto" style={{width:""}}>
                        <div>
                        <Breadish></Breadish>
                        {width < wid && <Filter tags={tags} setTags={setTags}></Filter>}
                        </div>
                    </Col>
                    : 
                    <div className="" style={{position:"absolute", top:"55px", height:"100%"}}>
                        <MenuModal tags={tags} setTags={setTags}></MenuModal>
                    </div>
                }
                <Col className="test" style={{position:"relative", maxWidth:`${width > 800? width > 1025? width - 400 + "px":width - 250 + "px":""}`}}>
                {/* {width > 800? width - 250:""} */}
                    {children}
                </Col>
                {width >= wid && 
                    <Col xs="auto" className="test">
                    <Filter tags={tags} setTags={setTags}></Filter>
                    </Col>
                }
                </Row>
            </Container>
    )
}