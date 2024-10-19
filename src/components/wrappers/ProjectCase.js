import { Row, Col } from "react-bootstrap";
import Keywords from "../Keywords";
import Showcase from "../Showcase";
import Scdescriptor from "../Scdescriptor";

export default function ProjectCase({width, repo, imagers, tags, description, title}) {
    return (
        <Row className="d-flex justify-content-center p-0 m-0 mt-5">
            <Col xs="12" className="">
            <Keywords keywords={tags}></Keywords>
            </Col>
            <Col className="p-0 m-0 pb-4" xs="auto">
                {/* <Col className="" style={{maxWidth:"550px"}} xs="12">
                </Col> */}
                <Showcase imagers={imagers} clientWidth={width-50}></Showcase>
            </Col>
            <Col className="p-0 m-0" style={{}}>
                <Scdescriptor repo={repo} title={title} description={description} clientWidth={width-50}></Scdescriptor>
            </Col>
        </Row>
    )
}