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
import { useOutletContext } from "react-router-dom";

export default function Projects() {
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [tags, setTags] = useOutletContext();
    const [projetcs, setProjetcs] = useState(data.collections.webdev.projects);

    const demoRef = useRef();

    const comparator = (a, b) => {
        const hasa = a.tags.some((el) => tags.includes(el));
        const hasb = b.tags.some((el) => tags.includes(el));
        console.log(hasa, hasb);
        if (hasa && !hasb) {
            console.log("a")
            return -1;
        } else if (!hasa && hasb) {
            console.log("b")
            return 1;
        } else {
            console.log("aaaaaa");
            const datea = new Date(a.date);
            const dateb = new Date(b.date);
            if (datea > dateb) {
                console.log("c")
                return -1;
            } else if (datea < dateb) {
                console.log("d")
                return 1;
                
            }
            return NaN;
        }
    }
  
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

    useEffect(() => {
        // projetcs.sort(comparator);
        // console.log(projetcs);
        setProjetcs((projetcs) => projetcs.toSorted(comparator));
    }, [tags])
    // useEffect(() => {
    //     // console.log(projetcs);
    //     setProjetcs((projetcs) => projetcs.toSorted(comparator));
    // }, [])
    return (
        //NOTES: fix grey tag, shift scdescriptor down 
        <ProjectWrapper wid={1025} s>
            <Crumbs crumbs={["Home", "Projects", "Collections", "WebDev"]}></Crumbs>
            <Row 
                className="justify-content-center p-0 m-0" 
                style={{maxWidth:"1000px"}}
                ref={demoRef}
            >
                {/* {tags.map((elem) => "susu"+elem)} */}
                {/* {JSON.stringify(projetcs)} */}
                {projetcs.map((elem) => {
                    return (
                        <Row className="p-0 m-0 mb-5">
                            <ProjectCase width={width} tags={elem.tags} title={elem.title}>
                            </ProjectCase>
                        </Row>
                    )
                })}
            </Row>
        </ProjectWrapper>
    )
}