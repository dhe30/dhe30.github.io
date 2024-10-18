import { Row, Col } from "react-bootstrap";
import Keywords from "../Keywords";
import Showcase from "../Showcase";
import Scdescriptor from "../Scdescriptor";

export default function ProjectCase({width, imagers, tags, description, title}) {
    return (
        <Row className="p-0 m-0 mt-5">
            <Col xs="12">
            <Keywords keywords={tags}></Keywords>
            </Col>
            <Col className="pb-4" xs="auto">
                {/* <Col className="" style={{maxWidth:"550px"}} xs="12">
                </Col> */}
                <Showcase imagers={imagers} clientWidth={width-50}></Showcase>
            </Col>
            <Col className="" style={{minWidth:"250px", maxWidth:"550px"}}>
                <Scdescriptor title={title} description={description} clientWidth={width-50}></Scdescriptor>
            </Col>
        </Row>
    )
}