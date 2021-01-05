import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';


export class Navigation extends Component {
    render() {
        return (
            <div>
                <>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" href="/about">ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3" href="/new">ADD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4" href="/digimon">Digimon</Nav.Link>
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
