import React from "react"
import DestinationAutoComplete from "../Components/MaterialComponents/DestinationAutoComplete"
import CustomizedSelects from "../Components/MaterialComponents/CustomizedSelects"
import PassengersModal from "../Components/MaterialComponents/PassengersModal"
import { TravelDatePicker } from "../Components/MaterialComponents/TravelDatePicker"
import DiscreteSlider from "../Components/MaterialComponents/DiscreteSlider"
import MapContainer from "../Components/Maps"
import axios from 'axios'

export class FlightsMapPage extends React.Component {
    constructor() {
        super()
        this.state = {
            ddlFlightType: [],
            ddlTripPathType: [],
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
            <div className="container" style={{ marginTop: 40 }}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="inlineFilter" style={{ margin: 10 }}>
                            <CustomizedSelects items={this.state.ddlTripPathType} onChange={this.OnTripPathTypeChange} />
                            <PassengersModal />
                            <CustomizedSelects items={this.state.ddlFlightType} />
                        </div>
                        <div className="inlineMainFilter">
                            <DestinationAutoComplete />
                            <DestinationAutoComplete />
                        </div>
                        <div className="inlineMainFilter">
                            <div className="divDateBox">
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
                        <DiscreteSlider />
                    </div>

                    <div className="col-md-8">
                        <MapContainer />
                    </div>
                </div>
            </div>
        )
    }
}