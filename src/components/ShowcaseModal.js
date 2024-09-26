import { Button, Modal } from "react-bootstrap";

export default function ShowcaseModal({handleClose, show, image}) {
    return (
        <>
        <Modal dialogClassName="showcase-modal-prime" className="actually" show={show} onHide={handleClose} centered>
            {/* <Modal.Body closeButton className="showcase-modal"> */}
                <img 
                    src={require(`../assets/${image.img}`)}
                    className="modal-image"
                ></img>
            {/* </Modal.Body> */}
        </Modal>
      </>
    )
}