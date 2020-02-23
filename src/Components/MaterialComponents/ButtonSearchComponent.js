import React from 'react';
import { useHistory } from "react-router-dom";

export function ButtonSearchComponent() {
    const history = useHistory();
    function handleClick() {
        history.push("/FlightsMapPage");
    }
    return (
        <button className="btnSearch" onClick={handleClick}>
            <img className="flt-fab-icon" src="../static/images/search_white_24dp.png" to="/FlightsMapPage" alt="" height="24" width="24" data-atf="1" /><span className="txtSearch">Search</span>
        </button>
    )
}