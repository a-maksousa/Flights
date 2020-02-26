import React from "react"
import GenericModal from "./GenericModal"
import Form from 'react-bootstrap/Form'

export default function PassengersModal() {
    return (
        <GenericModal btnName="Passengers">
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
        </GenericModal>
    );
}
