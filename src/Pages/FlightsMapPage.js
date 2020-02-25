import React from "react"
import DestinationAutoComplete from "../Components/DestinationAutoComplete"
import CustomizedSelects from "../Components/CustomizedSelects"
import PassengersModal from "../Components/PassengersModal"
import { TravelDatePicker } from "../Components/TravelDatePicker"
import DiscreteSlider from "../Components/DiscreteSlider"
import MapContainer from "../Components/Maps"
import MediaControlCard from "../Components/MediaControlCard"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
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
                            <DestinationAutoComplete icon={<FiberManualRecordOutlinedIcon fontSize="small" />} defVal="Amman, Jordan" placeholder="Where from ?"/>
                            <DestinationAutoComplete icon={<LocationOnOutlinedIcon fontSize="small" />} placeholder="Where to ?"/>
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
                        <div className="scrollableDiv">
                            <MediaControlCard image="/static/images/cards/istanbul.jpg" title="Istanbul" price="AED 961" />
                            <MediaControlCard image="/static/images/cards/cairo.jpg" title="Cairo" price="AED 1333" />
                            <MediaControlCard image="/static/images/cards/aqaba.jpg" title="Aqaba" price="AED 666" />
                            <MediaControlCard image="/static/images/cards/doha.jpg" title="Doha" price="AED 1601" />
                            <MediaControlCard image="/static/images/cards/beirut.jpg" title="Beirut" price="AED 1041" />
                        </div>
                    </div>

                    <div className="col-md-8">
                        <MapContainer />
                    </div>
                </div>
            </div>
        )
    }
}