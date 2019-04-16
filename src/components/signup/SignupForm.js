import React, { PureComponent } from 'react'
import '../../styles/Form.css'
import { Form, Col, InputGroup, Button, FormControl } from 'react-bootstrap'
import show from '../../images/password/show.png'
import hide from '../../images/password/hide.png'

export default class SignupForm extends PureComponent {

	render() {
		const {showPasswordFunc, handleSubmit, handleChange, handleTermsChange, isValidPassword, storePasswordErrors} = this.props
		const { validated, terms_accept, showPassword, submitting, formValues } = this.props.state

		return (
			<Form
                noValidate
                validated={validated}
                onSubmit={e => handleSubmit(e)}
            >
                <Form.Row>
                    <Form.Group as={Col} md="3" controlId="validationCustom01">
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            name="first_name"
                            value={formValues.first_name || ""}
                            onChange={(e) => { handleChange(e) }}
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
                            value={formValues.last_name || ""}
                            onChange={(e) => { handleChange(e) }}
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
                            value={formValues.phone_number || ""}
                            onChange={(e) => { handleChange(e) }}
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
                            value={formValues.email || ""}
                            onChange={(e) => { handleChange(e) }}
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
                                value={formValues.password || ""}
                                onChange={(e) => { handleChange(e) }}
								aria-describedby="basic-addon2"
								isInvalid={formValues.password && !isValidPassword()}
                            />
                            <InputGroup.Append>
                                <button tabIndex="-1" type="button" onClick={showPasswordFunc} variant="light"><img alt="hide-show-password" src={showPassword === false ? hide : show} className="passwordImage" /></button>
                            </InputGroup.Append>
                            <Form.Control.Feedback type="invalid">
							{`${formValues.password ? storePasswordErrors().join(`. `)
								: "Please fill in a password."} `}
                        </Form.Control.Feedback>
                        </InputGroup>
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
                                value={formValues.passwordConfirmation || ""}
                                onChange={(e) => { handleChange(e) }}
                                isInvalid={formValues.password && formValues.password !== formValues.passwordConfirmation && formValues.passwordConfirmation}
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <button tabIndex="-1" type="button" onClick={showPasswordFunc} variant="light"><img alt="hide-show-password" src={showPassword === false ? hide : show} className="passwordImage" /></button>
                            </InputGroup.Append>
                            <Form.Control.Feedback type="invalid">
                                {`${formValues.passwordConfirmation ? "Password confirmation does not match the password field." : "Please confirm your password."} `}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Control
                        type="checkbox"
                        checked={terms_accept}
                        onChange={handleTermsChange}
                        required />
                    <Form.Label>Accept our terms</Form.Label>
                    <Form.Control.Feedback type="invalid">
                        Please accept our terms
              </Form.Control.Feedback>
                </Form.Group>
                <Button disabled={submitting} type="submit">Sign up</Button>
            </Form>
		)
	}
}