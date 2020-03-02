import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import GenericModal from "./GenericModal"
import DiscreteSlider from "../Components/DiscreteSlider"

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
    },
    margin: {
        height: theme.spacing(1),
    },
}));


export default function PriceFilterModal() {
    const classes = useStyles();
    return (
        <GenericModal btnClass="btnSubLink" modalName="Price" controls={false}>
            <DiscreteSlider />
        </GenericModal>
    );
}
