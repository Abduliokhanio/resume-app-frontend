import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class RightBlock extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                    <Card.Title>ABDUL'S info</Card.Title>
                    <Card.Text>
                        Name:
                        Intrest:
                        mini-Bio:
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default RightBlock
