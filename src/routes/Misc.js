import Crumbs from "../components/Crumbs";
import Graphics from "../components/Graphics";
import ProjectWrapper from "../components/ProjectWrapper";
import useWindowSize from "../hooks/useWindowSize";

export default function Misc() {
    const { width } = useWindowSize();
    const selfStarter = 1325;
    return (
        <ProjectWrapper wid={1200}>
            {/* <div className="test graphics mx-auto" style={{width:`${width < selfStarter ? width < 1200 ? width < 810 ? width-60 : 875 - ((1200 - width)*((width/1200)**0.5)**0.5) : 875 - ((selfStarter - width)*(width/selfStarter)) : 875}px`}}>
                <div className="test graphics" style={{position:"absolute", width:`${width < 810 ? width+2 +"px": "100%"}`, height:"500px", marginLeft:`${width < 810 ? "-32px": ""}`}}>
                    <div className="special-border m-1">
                        <Crumbs crumbs={["Home", "Projects", "Collections", "Graphics"]} white={true}></Crumbs>
                    </div>
                </div>
            </div> */}
            <div className="test graphics mx-auto" style={{width:`${width < selfStarter ? width < 1200 ? width < 810 ? width-40 : 875 - ((1200 - width)*((width/1200)**0.5)**0.5) : 875 - ((selfStarter - width)*(width/selfStarter)) : 875}px`}}>
                    <div className="special-border m-1">
                        <Crumbs crumbs={["Home", "Projects", "Collections", "Graphics"]} white={true}></Crumbs>
                        <Graphics></Graphics>
                    </div>
            </div>
        </ProjectWrapper>
    )
}