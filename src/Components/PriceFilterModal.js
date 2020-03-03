import React from 'react';
import GenericModal from "./GenericModal"
import DiscreteSlider from "../Components/DiscreteSlider"

export default function PriceFilterModal() {
    return (
        <GenericModal btnClass="btnSubLink" modalName="Price" controls={false}>
            <DiscreteSlider />
        </GenericModal>
    );
}
