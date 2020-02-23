import React from "react"
import DestinationAutoComplete from "./MaterialComponents/DestinationAutoComplete"
import ButtonLRComponent  from "./MaterialComponents/ButtonLRComponent"

export class LocationComponent extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <div className="inlineMainFilter">
                    <DestinationAutoComplete />
                    <ButtonLRComponent/>
                    <DestinationAutoComplete />
                </div>
            </React.Fragment>
        )
    }
}