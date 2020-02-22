import React from "react"
import { FilterComponent } from "../Components/FilterComponent"
import { LocationDateComponent } from "../Components/LocationDateComponent"
import { ButtonSearchComponent } from "../Components/MaterialComponents/ButtonSearchComponent"


export class LandingPage extends React.Component {

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
                        <FilterComponent />
                        <LocationDateComponent />
                    </div>  
                    <div className="col-md-1"></div>
                </div>
                <div>
                    <ButtonSearchComponent/>
                </div>
               
            </div>
        )
    }
}