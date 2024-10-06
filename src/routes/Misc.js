import Crumbs from "../components/Crumbs";
import Graphics from "../components/Graphics";
import ProjectWrapper from "../components/ProjectWrapper";
import useWindowSize from "../hooks/useWindowSize";
import data from "../data/portfolio";
import { Row } from "react-bootstrap";
import { useEffect, useRef } from "react";
 
export default function Misc() {
    const { width } = useWindowSize();
    const wither = useRef();

    const selfStarter = 1325;
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
    },[])
    return (
        
        <ProjectWrapper wid={1200} restrictionAbove1025={1}>
            {/* <div className="test graphics mx-auto" style={{width:`${width < selfStarter ? width < 1200 ? width < 810 ? width-60 : 875 - ((1200 - width)*((width/1200)**0.5)**0.5) : 875 - ((selfStarter - width)*(width/selfStarter)) : 875}px`}}>
                <div className="test graphics" style={{position:"absolute", width:`${width < 810 ? width+2 +"px": "100%"}`, height:"500px", marginLeft:`${width < 810 ? "-32px": ""}`}}>
                    <div className="special-border m-1">
                        <Crumbs crumbs={["Home", "Projects", "Collections", "Graphics"]} white={true}></Crumbs>
                    </div>
                </div>
            </div> */}
            {/* style={{width:`${width < selfStarter ? width < 1200 ? width < 810 ? width-40 : 875 - ((1200 - width)*((width/1200)**0.5)**0.5) : 875 - ((selfStarter - width)*(width/selfStarter)) : 875}px`}} */}
            <div className="test graphics mx-auto" style={{width:"100%"}} ref={wither}>
                    <div className="special-border m-1">
                        <Crumbs crumbs={["Home", "Projects", "Collections", "Graphics"]} white={true}></Crumbs>
                        {
                            data.collections.graphics.projects.map((elem) => {
                                return (
                                    <Row className="p-0 m-0 my-5" id={elem.title}>
                                        <Graphics image={elem.images[0].img}></Graphics>
                                    </Row>
                                )
                            })
                        }
                    </div>
            </div>
        </ProjectWrapper>
    )
}