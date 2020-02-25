import React from 'react';

export default class ButtonLRComponent extends React.Component{
    constructor() {
        super()
    }
    render(){
        return (
            <span id="btnRL" button="button" className="btnLR">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="btnLRsvg">
                <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
            </svg>
           </span>
        )
     }
 }


 