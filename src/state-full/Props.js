import React, { Component } from 'react'
import Props2 from "../state-less/Props2"
import Props2class from "../state-full/Props2class"
import Props3class from "./Props3class"

export class Props extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <h1>Inside Props</h1>
                <hr/>
                <Props2/>
                <hr/>
                <Props2class name="ya boi added props to class"/>
                <hr/>
                <Props3class/>
            </div>
        )
    }
}

export default Props
