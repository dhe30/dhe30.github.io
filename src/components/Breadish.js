import { useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';
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
    <div className='mb-3 me-2'>
        <Accordion defaultActiveKey={[]} alwaysOpen>
            {Object.keys(bread).map((item, index) => {
                return (
                    <div className='inika-regular unlist' style={{fontSize: '16px', lineHeight:"25px"}}>
                        <CustomToggle eventKey={index}>{item} </CustomToggle>
                        <Accordion.Collapse eventKey={index} className='' style={{width:"fit-content"}}>
                            <ul className='' style={{marginBottom:"0px"}}>
                            {bread[item].map((elem) => {
                                return(<li className=''><button className='unbutton breadlet test'>{elem}</button></li>)
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