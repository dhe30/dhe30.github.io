import Gag from "./components/Gag";
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from "./components/Test";
import Breadish from "./components/Breadish";
import './index.css';
import Crumbs from "./components/Crumbs";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import Back from "./components/Back";
import Filter from "./components/Filter";
import useWindowSize from "./hooks/useWindowSize";

import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import useWheel from "./hooks/useWheel";
import ScrollAnimator from "./components/wrappers/ScrollAnimator";

function App() {
  const [tags, setTags] = useState([]);
  const [show, setShow] = useState([]);
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change
  return (
    <>
    <ScrollToTop>
    </ScrollToTop>
    <div className="p-0 m-0">
      {/* <div className="bar"><Gag></Gag></div> */}
      {/* <ScrollAnimator fixer={{position: "sticky", top: "0"}}> */}
        <Gag show={show} setShow={setShow}></Gag>
      {/* </ScrollAnimator> */}
      {/* <Test></Test> */}
      <Outlet  context={[tags, setTags, show]}/>
    </div>
    </>
  );
}

export default App;
