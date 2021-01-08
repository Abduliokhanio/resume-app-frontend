import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../index.css'

function FormInput(props) {

    //accessing the values the user inputs inside the form
    //event.target.parentElement.formGroupPassword.value
    //event.target.parentElement.formGroupEmail.value


    function test(event){
        debugger
    }

    return (
        <div>
            <p>Form from the form component</p>
            <Form className = 'center' style={{ width: '60%' }}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder={props.value1} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder={props.value2} />
                </Form.Group>
                <Button onClick = {test} variant="primary">Submit</Button>
            </Form>
        </div>
    )
}

export default FormInput
