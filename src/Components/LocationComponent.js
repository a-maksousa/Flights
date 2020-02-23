import React from "react"
import DestinationAutoComplete from "./MaterialComponents/DestinationAutoComplete"
import ButtonLRComponent  from "./MaterialComponents/ButtonLRComponent"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

export class LocationComponent extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <div className="inlineMainFilter">
                    <DestinationAutoComplete icon={<FiberManualRecordOutlinedIcon fontSize="small"/>} defVal = "Amman, Jordan" />
                    <ButtonLRComponent/>
                    <DestinationAutoComplete icon={<LocationOnOutlinedIcon fontSize="small"/>}/>
                </div>
            </React.Fragment>
        )
    }
}