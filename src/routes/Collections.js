import Collection from "../components/Collection";
import MiniCollections from "../components/MiniCollections";
import Crumbs from "../components/Crumbs";
import ProjectWrapper from "../components/ProjectWrapper";

export default function Collections() {

    return (
        <ProjectWrapper wid={1085}>
            <Crumbs crumbs={["Home", "Projects", "Collections"]}></Crumbs>
            <Collection></Collection>
            <div className="ps-4 mx-auto" style={{borderLeft:"3px dashed black", width:"fit-content"}}>
                <MiniCollections></MiniCollections>
                <MiniCollections></MiniCollections>
            </div>
        </ProjectWrapper>
    )
}