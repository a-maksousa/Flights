import React from "react"
import axios from 'axios'
import CustomizedSelects from "../Components/MaterialComponents/CustomizedSelects"
import PassengersModal from "./MaterialComponents/PassengersModal"
import { TravelDatePicker } from "./MaterialComponents/TravelDatePicker"
import DateRangeIcon from '@material-ui/icons/DateRange';

export class FilterComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            ddlFlightType: [],
            ddlTripPathType: []
        }
    }

    componentDidMount() {
        axios.get('static/data/ddlFlightType.json').then(response => {
            this.setState({ ddlFlightType: response })
        })

        axios.get('static/data/ddlTripPathType.json').then(response => {
            this.setState({ ddlTripPathType: response })
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="inlineFilter">
                    <CustomizedSelects items={this.state.ddlTripPathType} />
                    <PassengersModal />
                    <CustomizedSelects items={this.state.ddlFlightType} />
                </div>
                <br />
                <div className="inlineMainFilter">
                    <div className="divDateBox">
                        <DateRangeIcon className="dtmIcon" />
                        <TravelDatePicker />
                        <span class="dtmSpan"></span>
                        <TravelDatePicker />
                    </div>
                </div>

            </React.Fragment>
        )
    }
}