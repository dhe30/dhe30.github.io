import { useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';
import data from "../data/portfolio";
import {ReactComponent as Right} from "../assets/chevronright.svg";
import { Link } from 'react-router-dom';
function Breadish({bread = {"Collections" : ["collectionitem1", "collectionitem2"], "Collections2" : ["collectionitem1", "collectionitem2"]}}) {
    function CustomToggle({ children, eventKey, callback }) {
        const { activeEventKey } = useContext(AccordionContext);
        const decoratedOnClick = useAccordionButton(eventKey, 
            () => callback && callback(eventKey),
        );
        const isCurrentEventKey = activeEventKey.includes(eventKey);
        return (
          <button
            className='bread unbutton'
            onClick={decoratedOnClick}
          >
            {children} {isCurrentEventKey ?
                <img alt='' style={{marginBottom:"3px"}} src={minus}></img>:
                <img alt='' style={{marginBottom:"3px"}} src={plus}></img>            
            }
          </button>
        );
    }
    return (
    <div className='mb-3 test'>
        <Accordion defaultActiveKey={[]} alwaysOpen>
            {Object.keys(data.collections).map((item, index) => {
                return (
                    <div className='inter-love unlist' style={{fontSize: '16px', lineHeight:"1.5"}}>
                        <CustomToggle eventKey={index}>{item} </CustomToggle>
                        <Accordion.Collapse eventKey={index} className='' style={{width:"fit-content"}}>
                            <ul className='' style={{marginBottom:"0px"}}>
                            {(data.collections[item].projects).map((elem) => {
                                return(
                                    <li className='' style={{lineHeight:"1.5"}}>
                                        <Link
                                            to={"/" + item.toLowerCase() + `#${elem.title.replace(/\s/g, "")}`}
                                        >
                                            
                                            <span className='breadlet'
                                            ><Right 
                                            // style={{verticalAlign:"baseline"}}
                                            className='me-1'
                                            fill='#767676'
                                            height={12}
                                            width={12}></Right>

                                            {"" + elem.title.toLowerCase()}
                                                </span>
                                        </Link>
                                    </li>
                                )
                            })}
                            </ul>
                        </Accordion.Collapse>
                    </div>
                );
            })}
        </Accordion>
    </div>
    )
}

export default Breadish;