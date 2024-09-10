import Showcase from "../components/Showcase";
import Keywords from "../components/Keywords";
import Scdescriptor from "../components/Scdescriptor";
import Crumbs from "../components/Crumbs";
import { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Back from "../components/Back";
import Filter from "../components/Filter";
import Breadish from "../components/Breadish";

import ProjectWrapper from "../components/ProjectWrapper";


export default function Projects() {
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const demoRef = useRef();
  
    useEffect(() => {
      const resizeObserver = new ResizeObserver((event) => {
        // Depending on the layout, you may need to swap inlineSize with blockSize
        // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
        setWidth((event[0].contentBoxSize[0].inlineSize) | 0);
        setHeight(event[0].contentBoxSize[0].blockSize);
      });
  
      if (demoRef) {
        resizeObserver.observe(demoRef.current);
      }
    }, [demoRef]);

    return (
        <ProjectWrapper wid={1025} s>
            <Crumbs crumbs={["Home", "Projects", "Collections", "WebDev"]}></Crumbs>
            <Row 
                className="justify-content-center p-0 m-0" 
                style={{backgroundColor:"red", maxWidth:"1000px"}}
                ref={demoRef}
            >
                {/* {width} */}
                <Col className="pb-4" xs="auto">
                    <Col className="" style={{maxWidth:"550px"}} xs="12">
                        <Keywords keywords={["Code", "Code2"]}></Keywords>
                    </Col>
                    <Showcase clientWidth={width-50}></Showcase>
                </Col>
                <Col className="" style={{minWidth:"250px", maxWidth:"550px"}}>
                    <Scdescriptor></Scdescriptor>
                </Col>
            </Row>
        </ProjectWrapper>
    )
}