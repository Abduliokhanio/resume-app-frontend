import React, { Component } from 'react'

export class First_SF extends Component {
    constructor() {
        super();
        this.state = { buttonText: 0 };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickSUB = this.handleClickSUB.bind(this);
      }
    
      handleClick() {
        this.setState(() => {
          return { buttonText: this.state.buttonText + 1 };
        });
      }
      handleClickSUB() {
        if (this.state.buttonText > 0){ 
        this.setState(() => {
          return { buttonText: this.state.buttonText - 1 };
        });
        }
      }
    
      render() {
        return (
        <div>
        <h1>class</h1>
        <h1>{this.state.buttonText}</h1>
        <button onClick={this.handleClick}>increase</button>
        <button onClick={this.handleClickSUB}>decrese</button>
        </div>
        )
      }
}

export default First_SF


