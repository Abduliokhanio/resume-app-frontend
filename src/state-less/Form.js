import React from 'react'
import Form from 'react-bootstrap/Form'

function FormInput() {
    return (
        <div>
            <p>Form from the form component</p>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default FormInput