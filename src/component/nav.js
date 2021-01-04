import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';


export class Navigation extends Component {
    render() {
        return (
            <div>
                <>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">ADD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4">Option 4</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    {/* <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link> */}
                    </Nav.Item>
                </Nav>
                </>
            </div>
        )
    }
}

export default Navigation
