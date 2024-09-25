import Gag from "./components/Gag";
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from "./components/Test";
import Breadish from "./components/Breadish";
import './index.css';
import Crumbs from "./components/Crumbs";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

import Back from "./components/Back";
import Filter from "./components/Filter";
import useWindowSize from "./hooks/useWindowSize";

import { Outlet, useOutletContext } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import useWheel from "./hooks/useWheel";

function App() {
  const [tags, setTags] = useState([]);
  return (
    <>
    <ScrollToTop>
    </ScrollToTop>
    <div className="p-0 m-0">
      {/* <div className="bar"><Gag></Gag></div> */}
      <Gag></Gag>
      {/* <Test></Test> */}
      <Outlet  context={[tags, setTags]}/>
    </div>
    </>
  );
}

export default App;
