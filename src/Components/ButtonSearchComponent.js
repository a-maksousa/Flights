import React from 'react';
import { useHistory } from "react-router-dom";
import ReactQueryParams from 'react-query-params';

export function ButtonSearchComponent(props) {
    const history = useHistory();
    function handleClick() {
        if (props.destinationWhereTo === "") {
            history.push("/FlightsMapPage");
        }
        else {
            history.push("/FilterResultsPage");
            var obj = new ReactQueryParams()
            obj.setQueryParams({
                destinationWhereTo: props.destinationWhereTo
            });
        }
    }
    return (
        <button className="btnSearch" onClick={handleClick}>
            <img className="flt-fab-icon" src="../static/images/search_white_24dp.png" to="/FlightsMapPage" alt="" height="24" width="24" data-atf="1" /><span className="txtSearch">Search</span>
        </button>
    )
}