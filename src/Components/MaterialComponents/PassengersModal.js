import React from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Form from 'react-bootstrap/Form'

export default function PassengersModal() {
    const [smShow, setSmShow] = React.useState(false);

    return (
        <ButtonToolbar>
            <Button className="btnLink" style={{color:"#333"}} variant="link" onClick={() => setSmShow(true)}>Passengers <ArrowDropDownIcon style={{color:"#757575"}} /></Button>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Body>
                    <div class="container-fluid">
                        <div class="divPassFilter row">
                            <div class="lblPassenger col-md-6">Adults</div>
                            <div class="col-md-4">
                                <Form.Control type="number" defaultValue="1" id="adults-number-input" min="1"
                                    max="9" />
                            </div>
                        </div>
                        <div class="divPassFilter row">
                            <div class="lblPassenger col-md-6">
                                Children
                                <span class="lblSubPassenger">Aged 2-12</span>
                            </div>
                            <div class="col-md-4">
                                <input class="form-control" type="number" defaultValue="0" id="children-number-input" min="0"
                                    max="9" />
                            </div>
                        </div>
                        <div class="divPassFilter row">
                            <div class="lblPassenger col-md-6">
                                Infants
                                <span class="lblSubPassenger">In seat</span>
                            </div>
                            <div class="col-md-4">
                                <input class="form-control" type="number" defaultValue="0" id="inSeat-number-input" min="0"
                                    max="9" />
                            </div>
                        </div>
                        <div class="divPassFilter row">
                            <div class="lblPassenger col-md-6">
                                Infants
                                <span class="lblSubPassenger">On lap</span>
                            </div>
                            <div class="col-md-4">
                                <input class="form-control" type="number" defaultValue="0" id="onLap-number-input" min="0"
                                    max="9" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" className="btnLink" variant="link" onClick={() => setSmShow(false)}
                        style={{color: "rgba(0,0,0,.56)",fontWeight: "bold"}}>Close</Button>
                    <Button type="button" className="btnLink" variant="link" onClick={() => setSmShow(false)}
                        style={{color:"#4285f4",fontWeight: "bold"}}>Done</Button>
                </Modal.Footer>
            </Modal>
        </ButtonToolbar>
    );
}
