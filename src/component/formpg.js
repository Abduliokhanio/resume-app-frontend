import React, { Component } from 'react'
import FormInput from '../state-less/Form'

export class Formpg extends Component {
    render() {
        return (
            <div>
                <h1>FORM PAGE</h1>
                <FormInput value1 = "Someusername" value2 = "SomePassword"/>
            </div>
        )
    }
}

export default Formpg
