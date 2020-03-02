import React from 'react';
import GenericModal from "./GenericModal"
import CheckboxList from "./CheckboxList"
import RangeSlider from "./RangeSlider"
import Typography from '@material-ui/core/Typography';

const lstAirlines = [
    { key: "1", val: "Royal Jordanian" },
    { key: "2", val: "Aegean" },
    { key: "3", val: "Aeroflot" },
    { key: "4", val: "British Airways" },
    { key: "5", val: "Emirates" },
    { key: "6", val: "flydubai" }

]

export default function ConnectingAirportsFilterModal(props) {

    return (
        <GenericModal btnClass="btnSubLink" modalName="Connecting airports" controls={false}>
            <Typography id="range-slider" gutterBottom>
                Stopover duration
                <RangeSlider />
            </Typography>
            <hr />
            <Typography id="range-slider" gutterBottom>
                Airports
            <CheckboxList lstItems={lstAirlines} />
            </Typography>
        </GenericModal>
    );
}
