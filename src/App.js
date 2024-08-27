import Gag from "./components/Gag";
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from "./components/Test";
import Breadish from "./components/Breadish";
import './index.css';
import Crumbs from "./components/Crumbs";
import { Col, Container, Row } from "react-bootstrap";
import Collections from "./components/Collections";
import MiniCollections from "./components/MiniCollections";
import Back from "./components/Back";
import Filter from "./components/Filter";
import useWindowSize from "./hooks/useWindowSize";
import Showcase from "./components/Showcase";
import Keywords from "./components/Keywords";
function App() {
  const { width } = useWindowSize();
  return (
    <div>
      {/* <div className="bar"><Gag></Gag></div> */}
      <Gag></Gag>
      {/* <Test></Test> */}

      <Container fluid className="test d-flex justify-content-center p-0 m-0">
        <Row className="mx-3 mx-sm-3 mx-md-4" style={{maxWidth:"1200px"}}>
        <Back></Back>
          <Col className="test" xs="auto">
            <div>
              {width < 1085 && <Filter></Filter>}
              <Breadish></Breadish>
            </div>
          </Col>
          <Col className="test">
              <Crumbs></Crumbs>
              <Collections></Collections>
              <div className="ps-4 mx-auto" style={{borderLeft:"3px dashed black", width:"fit-content"}}>
                <MiniCollections></MiniCollections>
                <MiniCollections></MiniCollections>
              </div>
              <Keywords keywords={["Code", "Code2"]}></Keywords>
              <Showcase></Showcase>
          </Col>
          {width >= 1085 && 
            <Col xs="auto" className="test">
              <Filter></Filter>
            </Col>
          }
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
