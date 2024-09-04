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

import { Outlet } from "react-router-dom";

function App() {
  const { width } = useWindowSize();
  const [crumbs, setCrumbs] = useState(["Home", "Projects", "Collections"]);
  function handleCrumbs (a) {
    setCrumbs(a);
  }
  return (
    <div>
      {/* <div className="bar"><Gag></Gag></div> */}
      <Gag></Gag>
      {/* <Test></Test> */}

      <Outlet/>
      
    </div>
  );
}

export default App;
