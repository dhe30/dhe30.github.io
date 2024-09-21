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
import ProjectCase from "../components/wrappers/ProjectCase";

import data from "../data/portfolio";

export default function Projects() {
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const demoRef = useRef();
    // const datar = JSON.parse(data);
  
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
        //NOTES: fix grey tag, shift scdescriptor down 
        <ProjectWrapper wid={1025} s>
            <Crumbs crumbs={["Home", "Projects", "Collections", "WebDev"]}></Crumbs>
            <Row 
                className="justify-content-center p-0 m-0" 
                style={{maxWidth:"1000px"}}
                ref={demoRef}
            >
                {/* {width} */}
                {data.collections.webdev.projects.map((elem) => {
                    return (
                        <ProjectCase width={width} tags={elem.tags} title={elem.title}>

                        </ProjectCase>
                    )
                })}
            </Row>
        </ProjectWrapper>
    )
}