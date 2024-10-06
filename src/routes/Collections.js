import Collection from "../components/Collection";
import MiniCollections from "../components/MiniCollections";
import Crumbs from "../components/Crumbs";
import ProjectWrapper from "../components/ProjectWrapper";
import data from "../data/portfolio";

export default function Collections() {
    const minis = 2;
    return (
        <ProjectWrapper wid={1070}>
            <Crumbs crumbs={["Home", "Projects", "Collections"]}></Crumbs>
            {
                Object.keys(data.collections).map((elem) => {
                    const projects = data.collections[elem];
                    const rand = Math.floor(Math.random()*projects.projects.length);
                    return (
                        <>
                        <Collection title={elem} image={projects.thumbnail}></Collection>
                        <div className=" test ps-4 mx-auto mb-5" style={{borderLeft:"3px dashed black", width:"fit-content"}}>
                           { [0,1].map((element,index) => {
                                const project = projects.projects[(rand+index)%projects.projects.length]
                                return <MiniCollections path={elem} title={project.title} description={project.description} image={project.images[0].img}></MiniCollections>
                            })
                            }
                            
                        </div>
                        </>
                    )
                })
            }
        </ProjectWrapper>
    )
}