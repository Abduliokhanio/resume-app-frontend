import React, { Component } from 'react'
import Props3class from './Props3class'

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

    //adding an arrow function allows you to not have to use bind

    render() {
        return (
            <div>
                <h3>inside prps2 class practice</h3>
                <h6 onClick ={this.changingprops}>Props: {this.state.sentence}</h6>
                <Props3class info = {this.state.sentence}/>
            </div>
        )
    }
}

export default Props2class
