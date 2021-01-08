import React, { Component } from 'react'

export class Props3class extends Component {

    alerting = () => {
        alert("arrow function")
    }

    render() {
        return (
            <div>
                <h1>in prop3 class grandchild</h1>
                <h1 onClick={this.alerting}>{this.props.info}</h1>
            </div>
        )
    }
}

export default Props3class
