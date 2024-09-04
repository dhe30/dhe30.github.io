import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../index.css'
import { useEffect, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import useWheel from '../hooks/useWheel';
import useFetch from '../hooks/useFetch';
import { NavbarCollapse } from 'react-bootstrap';
function Gag() {

    const [date, setDate] = useState(new Date(Date.now()));

    const [expanded, setExpanded] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [highlight, setHighlight] = useState("Projects");

    const { width } = useWindowSize();

    const { speed, pos } = useWheel();

    const { data, error, isLoading } = useFetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York?unitGroup=us&key=W3HZ8D5CVACHVK772UBGHY3V8&contentType=json");

    useEffect(()=> {
        const update = setInterval(() => {
            setDate(new Date(Date.now()));
        }, 1000);
        return () => {clearInterval(update);}
    }, []);

    useEffect(()=> {
        if (speed > 0.2) {
            setShowNav(true);
        }
        else if (speed < -0.2 && pos > 80) {
            setShowNav(false);
        } 
    }, [speed])

    return (
        <Navbar className={`test prevent-select nav-trans inter-love ${showNav? 'nav-mask-show' : pos > 90? 'nav-mask-hide': 'nav-mask-show'}`} 
        sticky="top"
        style={{backgroundColor:"white", opacity:"0.8"}}
        >
            {/*!!! ADD RESPONZIVE PADDING + MAX WIDTH, LOOK AT ROUTES*/}
            <Container fluid className='test bar-bar justify-content-left'>
                <Navbar.Brand className='bar test' style={{marginLeft:"0"}}> 
                   <span className='headings'> FirstName LastName </span>
                </Navbar.Brand>
                <Nav className='bar-bar-bar justify-content-left'>
                     {/*decrease text size around 750 px client width*/}
                    <Nav.Link className={`nav-link ${highlight == "Projects" ? "highlight" : ""}`} onClick={() => {setHighlight("Projects")}}>Projects</Nav.Link>
                    <Nav.Link className={`nav-link ${highlight == "Notes" && "highlight"}`} onClick={() => {setHighlight("Notes")}}>Notes</Nav.Link>
                </Nav>
                {width > 1200 && // 1200
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                            <span className='headings'>
                                {`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()} `}
                            </span>
                            <span className='headings' >
                                {/* <span className='' style={{display: "block", width: "100px"}}>{data ? `${data.currentConditions.temp}°F (NY)` : '...'}</span> */}
                                <span className='fontista'>{`${date.getHours()%12===0? 12 : date.getHours()%12}:${('0'+date.getMinutes()).substr(-2)}:${('0'+date.getSeconds()).substr(-2)} ${date.getHours()>=11? 'PM' : 'AM'}`}</span>
                            </span>
                        </Navbar.Text>
                </Navbar.Collapse>
                }
                
            </Container>
        </Navbar>
    )
}

export default Gag;