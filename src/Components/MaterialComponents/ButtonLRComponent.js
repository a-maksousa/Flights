import React from 'react';

export default class ButtonLRComponent extends React.Component{
    constructor() {
        super()
    }
    render(){
        return (
            <span id="btnRL" button="button" style="background-color: #fff;color: #5f6368;margin: auto -13px;padding: 5px;border-radius: 100%;box-sizing: border-box;height: 34px;position: relative;-webkit-transition: background-color 150ms ease 0ms;width: 34px;z-index: 1; border: solid #ccc 1px;">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="display: block;height: 24px;-webkit-transition: transform 150ms ease 0ms;width: 24px;">
                <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
            </svg>
           </span>
        )
     }
 }


 