import React from "react"
import axios from 'axios'
import CustomizedSelects from "../Components/CustomizedSelects"
import PassengersFilterModal from "../Components/PassengersFilterModal"
import { TravelDatePicker } from "../Components/TravelDatePicker"
import DestinationAutoComplete from "../Components/DestinationAutoComplete"
import ButtonLRComponent from "../Components/ButtonLRComponent"
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import ReactQueryParams from 'react-query-params';
import AccordionComponent from '../Components/AccordionComponent'

export class FilterResultsPage extends React.Component {
    constructor() {
        super()
        var obj = new ReactQueryParams()

        const lstResult = [
            {
                icon: "https://www.gstatic.com/flights/airline_logos/70px/RJ.png",
                time: "07:00 – 08:30",
                airport: "Royal Jordanian",
                duration: "2 h 50 m",
                iata: "AMM-DXB",
                flightType: "Non-stop",
                price: "AED 1,391",
                flightPathType: "round trip"
            },
            {
                icon: "https://www.gstatic.com/flights/airline_logos/70px/EK.png",
                time: "11:15 – 16:05",
                airport: "Emirates",
                duration: "3 h 30 m",
                iata: "AMM-DXB",
                flightType: "Non-stop",
                price: "AED 1,412",
                flightPathType: "round trip"
            },
            {
                icon: "https://www.gstatic.com/flights/airline_logos/70px/FZ.png",
                time: "21:35 – 02:35",
                airport: "flydubai",
                duration: "3 h 0 m",
                iata: "AMM-DXB",
                flightType: "Non-stop",
                price: "AED 1,428",
                flightPathType: "round trip"
            }
        ]

        this.state = {
            ddlFlightType: [],
            ddlTripPathType: [],
            tripPathType: 0,
            destinationWhereTo: decodeURIComponent(obj.queryParams.destinationWhereTo),
            originWhereFrom: "",
            lstResult: lstResult
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
            <div className="container" style={{ marginTop: 40 }}>
                <div className="row">
                    <div className="col-md-12">
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
                                        <DestinationAutoComplete onSelect={this.onOriginAutoCompleteSelect} icon={<FiberManualRecordOutlinedIcon fontSize="small" />} defVal="Amman, Jordan" />
                                        <ButtonLRComponent />
                                        <DestinationAutoComplete onSelect={this.onDestinationAutoCompleteSelect} icon={<LocationOnOutlinedIcon fontSize="small" />} defVal={this.state.destinationWhereTo} />
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
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <h4>Departing Flights</h4>
                    </div>
                    <div className="col-md-12">
                        <AccordionComponent lstResult={this.state.lstResult} />
                    </div>
                </div>
            </div>
        )
    }
}