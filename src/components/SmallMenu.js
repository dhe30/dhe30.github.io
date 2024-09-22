import { useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import {ReactComponent as Menu} from "../assets/icons8-menu.svg";

export default function SmallMenu({isNavEvenHereInTheFirstPlace, highlight, setHighlight}) {
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);
    const handleClick = () => {
        setShow(true);
        setId(
            setTimeout(() => {
                console.log("haj")
            setShow(false);
        }, 1500))
    }
    const handleMouseEnter = () => {
        clearTimeout(id);
    }
    
    const handleMouseLeave = () => {
        // console.log("sijuebcivecvch")
        setShow(false);
    }
    return (
        <OverlayTrigger
          trigger={[]}
          show={show && isNavEvenHereInTheFirstPlace}
          placement="bottom"
        //   rootClose={true}
          overlay={
            <Popover
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
              {/* <Popover.Header as="h3">{`Popover`}</Popover.Header> */}
              <Popover.Body>
                <div className={`nav-link ${highlight == "Notes" && "highlight"} fonty-good-size`} onClick={() => {setHighlight("Notes")}}>Resume</div>
                <div className={`nav-link ${highlight == "Projects" && "highlight"} fonty-good-size`} onClick={() => {setHighlight("Projects")}}>Projects</div>

                {/* <strong>Holy guacamole!</strong> Check this info. */}
              </Popover.Body>
            </Popover>
          }
        >
            <Menu  
                className={`menu-small ${(show && isNavEvenHereInTheFirstPlace) && 'menu-small-seriousness'}`}         
                onClick={handleClick}
                // style={{fill: "red"}}
            >{""+show}</Menu>
        </OverlayTrigger>
    )
}