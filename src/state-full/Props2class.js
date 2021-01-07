import React, { Component } from 'react'

export class Props2class extends Component {

    constructor(props){
        super(props);
        this.state = { sentence: this.props.name}
        this.changingprops = this.changingprops.bind(this);
    }

    changingprops(){
        this.setState(()=>{
            return {
                sentence: "changed"
            }
        })
    }

    //adding an arrow function

    render() {
        return (
            <div>
                <h3>inside prps2 class practice</h3>
                <h3 onClick ={this.changingprops}>Props: {this.state.sentence}</h3>
            </div>
        )
    }
}

export default Props2class
