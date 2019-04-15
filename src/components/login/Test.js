import React, { Component } from 'react'
import { Form, Col, InputGroup, Button, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import show from '../../images/password/show.png'
import hide from '../../images/password/hide.png'
import { signup } from '../../actions/signup'
import './Test.css'

class FormExample extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            validated: false,
            showPassword: false,
            formValues: {},
            terms_accept: false,
            submitting: false
        };
    }

    handleChange = (event) => {

        const { name, value } = event.target

        this.setState({
            formValues: { ...this.state.formValues, [name]: value }
        })
    }

    handleTermsChange = () => {
        this.setState({
            terms_accept: !this.state.terms
        })
    }

    showPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            const { first_name, last_name, password, phone_number, email } = this.state.formValues
            const { terms_accept } = this.state
            const data = { terms_accept, first_name, last_name, password, phone_number, email }
            this.setState({ submitting: true })
            this.props.signup(data, this.props.history)
        }
        this.setState({ validated: true });
    }

    render() {
        const { validated, showPassword, terms_accept, submitting } = this.state
        const { first_name, last_name, phone_number, email, password, passwordConfirmation } = this.state.formValues

        return (
            <Form
                noValidate
                validated={validated}
                onSubmit={e => this.handleSubmit(e)}
            >
                <Form.Row>
                    <Form.Group as={Col} md="3" controlId="validationCustom01">
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            name="first_name"
                            value={first_name || ""}
                            onChange={(e) => { this.handleChange(e) }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please fill in your first name.
                </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="5  " controlId="validationCustom02">
                        <Form.Control
                            required
                            type="text"
                            name="last_name"
                            placeholder="Last name"
                            value={last_name || ""}
                            onChange={(e) => { this.handleChange(e) }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please fill in your last name.
                </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="8" controlId="validationCustomTelephone">
                        <Form.Control
                            type="text"
                            placeholder="Telephone"
                            name="phone_number"
                            required
                            value={phone_number || ""}
                            onChange={(e) => { this.handleChange(e) }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please fill in your phonenumber.
                            </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="8" controlId="validationCustomEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            value={email || ""}
                            onChange={(e) => { this.handleChange(e) }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please fill in a valid email.
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
                                value={password || ""}
                                onChange={(e) => { this.handleChange(e) }}
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <button type="button" onClick={this.showPassword} variant="light"><img alt="hide-show-password" src={showPassword === false ? hide : show} className="passwordImage" /></button>
                            </InputGroup.Append>
                        </InputGroup>
                        <Form.Control.Feedback type="invalid">
                            Please fill in a password.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="8" controlId="formBasicPasswordConfirmation">
                        <InputGroup className="mb-3">
                            <FormControl
                                type={showPassword ? "text" : "password"}
                                placeholder="Password confirmation"
                                name="passwordConfirmation"
                                required
                                value={passwordConfirmation || ""}
                                onChange={(e) => { this.handleChange(e) }}
                                isInvalid={password && password !== passwordConfirmation}
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <button type="button" onClick={this.showPassword} variant="light"><img alt="hide-show-password" src={showPassword === false ? hide : show} className="passwordImage" /></button>
                            </InputGroup.Append>
                        </InputGroup>
                        <Form.Control.Feedback type="invalid">
                            Password confirmation does not match the password field.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Control
                        type="checkbox"
                        checked={terms_accept}
                        onChange={this.handleTermsChange}
                        required />
                    <Form.Label>Accept our terms</Form.Label>
                    <Form.Control.Feedback type="invalid">
                        Please accept our terms
              </Form.Control.Feedback>
                </Form.Group>
                <Button disabled={submitting} type="submit">Submit form</Button>
            </Form>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        signUp: state.signUp
    }
}

export default connect(mapStateToProps, { signup })(FormExample)