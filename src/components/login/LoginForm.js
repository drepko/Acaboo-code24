import React, { Component } from 'react';
import show from '../../images/password/show.png'
import hide from '../../images/password/hide.png'
import './LoginForm.css'
import { Form, Col, InputGroup, Button, FormControl } from 'react-bootstrap'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.email = React.createRef();
        this.logRef = this.logRef.bind(this);
      }

      logRef() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        // console.log(this.email.current.props)
      }
   
    render() {
        const { showPasswordFunc, handleSubmit, handleChange } = this.props
        const {formValues, showPassword, validated, submitting} = this.props.state

        return (

            <Form
                noValidate
                validated={validated}
                onSubmit={e => handleSubmit(e)}
            >
                <Form.Row>
                    <Form.Group as={Col} md="8" controlId="validationCustomEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            value={formValues.email || ""}
                            onChange={(e) => { handleChange(e) }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please fill in your email.
                            </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="8" controlId="formBasicPassword">
                        <InputGroup className="mb-3">
                            <FormControl
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                required
                                value={formValues.password || ""}
                                onChange={(e) => { handleChange(e) }}
								aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <button tabIndex="-1" type="button" onClick={showPasswordFunc} variant="light"><img alt="hide-show-password" src={showPassword === false ? hide : show} className="passwordImage" /></button>
                            </InputGroup.Append>
                            <Form.Control.Feedback type="invalid">
                            Please fill in your password.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Button disabled={submitting} type="submit">Login</Button>
            </Form>
        )
    }
}