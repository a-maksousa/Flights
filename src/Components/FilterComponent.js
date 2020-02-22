import React from "react"
import axios from 'axios'
import CustomizedSelects from "../Components/MaterialComponents/CustomizedSelects"
import PassengersModal from "./MaterialComponents/PassengersModal"
import { TravelDatePicker } from "./MaterialComponents/TravelDatePicker"
import DateRangeIcon from '@material-ui/icons/DateRange';
import { LocationDateComponent } from "../Components/LocationDateComponent"

export class FilterComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            ddlFlightType: [],
            ddlTripPathType: [],
            tripPathType: 0
        }
        this.OnTripPathTypeChange = this.OnTripPathTypeChange.bind(this);
    }

    componentDidMount() {
        axios.get('static/data/ddlFlightType.json').then(response => {
            this.setState({ ddlFlightType: response })
        })

        axios.get('static/data/ddlTripPathType.json').then(response => {
            this.setState({ ddlTripPathType: response })
        })
    }

    OnTripPathTypeChange(TripType) {
        this.setState({ tripPathType: TripType })
    }

    render() {
        return (
            <React.Fragment>
                <div className="inlineFilter">
                    <CustomizedSelects items={this.state.ddlTripPathType} onChange={this.OnTripPathTypeChange} />
                    <PassengersModal />
                    <CustomizedSelects items={this.state.ddlFlightType} />
                </div>
                <br />
                <div className="container-fluid">
                    <div className="row inlineMainFilter">
                        <div className="col-md-6">
                            <LocationDateComponent />
                        </div>
                        <div className="col-md-6">
                            <div className="divDateBox">
                                <DateRangeIcon className="dtmIcon" />
                                <TravelDatePicker />
                                {
                                    Number(this.state.tripPathType) === 2 ?
                                        <div></div>
                                        : <React.Fragment>
                                            <span className="dtmSpan"></span>
                                            <TravelDatePicker />
                                        </React.Fragment>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}