import React from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function GenericModal(props) {
    const [smShow, setSmShow] = React.useState(false);

    return (
        <ButtonToolbar>
            <Button className={props.btnClass} style={{ color: "#333" }} variant="link" onClick={() => setSmShow(true)}> {props.modalName} <ArrowDropDownIcon style={{ color: "#757575" }} /></Button>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="lblModal lblModalHeader">{props.modalName}</p>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                {
                    props.controls == true ?
                        <Modal.Footer>
                            <Button type="button" className="btnLink" variant="link" onClick={() => setSmShow(false)}
                                style={{ color: "rgba(0,0,0,.56)", fontWeight: "bold" }}>Close</Button>
                            <Button type="button" className="btnLink" variant="link" onClick={() => setSmShow(false)}
                                style={{ color: "#4285f4", fontWeight: "bold" }}>Done</Button>
                        </Modal.Footer>
                        : <div></div>
                }
            </Modal>
        </ButtonToolbar>
    );
}
