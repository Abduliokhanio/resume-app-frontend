import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class Feed extends Component {
    render() {
        return (
            <div>
                  <Card>
                    <Card.Body>
                    <Card.Title>ABDUL'S Resume</Card.Title>
                    <Card.Text>
                        SOME RANDOM INFO ABOUT MY EXPERIENCE
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Feed
