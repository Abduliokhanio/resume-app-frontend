import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                        <Nav.Link eventKey="link-2"><Link to="/about">ABOUT</Link></Nav.Link>    
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3"><Link to="/new">ADD</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4"><Link to="/test_sl">Test_sl</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-5"><Link to="/test_sf">Test_sf</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-6"><Link to="/props">Props</Link></Nav.Link>
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
