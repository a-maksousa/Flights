import React from "react"
import GenericModal from "./GenericModal"
import Form from 'react-bootstrap/Form'

export default function BagsFilterModal() {
    const [bags, setNumOfBags] = React.useState("0");

    const handleChange = event => {
        setNumOfBags(event.target.value)
    };

    return (
        <GenericModal btnClass="btnSubLink" modalName="Bags" controls={false}>

            <div class="lblModal">Carry-on bag</div>
            <br/>
            <Form.Control type="number" onChange={handleChange} defaultValue={bags} id="adults-number-input" min="0" max="1" />

        </GenericModal>
    );
}
