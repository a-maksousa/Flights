import React from 'react';
import GenericModal from "./GenericModal"
import CheckboxList from "./CheckboxList"

const lstAirlines = [
    { key: "1", val: "Royal Jordanian" },
    { key: "2", val: "Aegean" },
    { key: "3", val: "Aeroflot" },
    { key: "4", val: "British Airways" },
    { key: "5", val: "Emirates" },
    { key: "6", val: "flydubai" }

]

export default function AirlinesFilterModal(props) {

    return (
        <GenericModal btnClass="btnSubLink" modalName="Airlines" controls={false}>
            <CheckboxList lstItems={lstAirlines} />
        </GenericModal>
    );
}
