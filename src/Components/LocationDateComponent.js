import React from "react"
import OriginAutoComplete from "./MaterialComponents/OriginAutoComplete"
import DestinationAutoComplete from "./MaterialComponents/DestinationAutoComplete"
import ButtonLRComponent  from "./MaterialComponents/ButtonLRComponent"

export class LocationDateComponent extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <div className="inlineMainFilter">
                    <OriginAutoComplete />
                   
                    <DestinationAutoComplete />
                </div>
            </React.Fragment>
        )
    }
}