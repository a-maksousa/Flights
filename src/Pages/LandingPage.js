import React from "react"
import { FilterComponent } from "../Components/FilterComponent"


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
                        
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}