import React from 'react';

export class ButtonSearchComponent extends React.Component{
    constructor() {
        super()
    }
    render(){
        return (
        <button className="btnSearch">
            <img className="flt-fab-icon" src="../static/images/search_white_24dp.png" alt="" height="24" width="24" data-atf="1"/><span className="txtSearch">Search</span>
        </button>
        )
     }
 }
