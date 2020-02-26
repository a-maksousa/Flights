import React from "react"
import axios from 'axios'
import CustomizedSelects from "../Components/CustomizedSelects"
import PassengersFilterModal from "../Components/PassengersFilterModal"
import { TravelDatePicker } from "../Components/TravelDatePicker"
import { ButtonSearchComponent } from "../Components/ButtonSearchComponent"
import DestinationAutoComplete from "../Components/DestinationAutoComplete"
import ButtonLRComponent from "../Components/ButtonLRComponent"
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';



export class LandingPage extends React.Component {

    constructor() {
        super()
        this.state = {
            ddlFlightType: [],
            ddlTripPathType: [],
            tripPathType: 0,
            destinationWhereTo: "",
            originWhereFrom: ""
        }
        this.OnTripPathTypeChange = this.OnTripPathTypeChange.bind(this);
        this.onDestinationAutoCompleteSelect = this.onDestinationAutoCompleteSelect.bind(this);
        this.onOriginAutoCompleteSelect = this.onOriginAutoCompleteSelect.bind(this);
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

    onDestinationAutoCompleteSelect(DestinationWhereTo) {
        this.setState({ destinationWhereTo: DestinationWhereTo })
    }

    onOriginAutoCompleteSelect(OriginWhereFrom) {
        this.setState({ originWhereFrom: OriginWhereFrom })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img className="imgHeader" src="/static/images/illustration-flights-desktop.png" alt="illustration-flights-desktop.png" />
                        <div className="flights-header">
                            <h1 className="flights-header-txt">Flights</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 searchCard">
                        <div className="inlineFilter" style={{ margin: 20 }}>
                            <CustomizedSelects items={this.state.ddlTripPathType} onChange={this.OnTripPathTypeChange} />
                            <PassengersFilterModal />
                            <CustomizedSelects items={this.state.ddlFlightType} />
                        </div>
                        <br />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="inlineMainFilter">
                                        <DestinationAutoComplete onSelect={this.onOriginAutoCompleteSelect} icon={<FiberManualRecordOutlinedIcon fontSize="small" />} defVal="Amman, Jordan" placeholder="Where from ?"/>
                                        <ButtonLRComponent />
                                        <DestinationAutoComplete onSelect={this.onDestinationAutoCompleteSelect} icon={<LocationOnOutlinedIcon fontSize="small" />} placeholder="Where to ?" />
                                    </div>
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
                        <div>
                            <ButtonSearchComponent destinationWhereTo={this.state.destinationWhereTo} />
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}