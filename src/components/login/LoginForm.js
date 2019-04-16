import { Form, Input } from 'formsy-react-components';
import React, { Component } from 'react';
import show from '../../images/password/show.png'
import hide from '../../images/password/hide.png'
import './TestForm.css'

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
        const { state, onSubmit, showPassword } = this.props

        return (

            <Form
                onSubmit={(data) => { onSubmit(data) }}
                className="custom-classname-is-rendered"
                layout="vertical"
            >   

                <Input
                    ref={this.email}
                    name="email"
                    value=""
                    type="email"
                    onChange={this.logRef}
                    autoComplete="on"
                    placeholder="Please fill in your e-mail."
                    validations="isEmail"
                    validationErrors={{
                        isEmail: 'Please fill in a valid e-mail.',
                    }}
                    required
                />
                <Input
                    name="password"
                    onChange={this.changeValue}
                    value=""
                    type={state.showPassword ? "text" : "password"}
                    placeholder="Fill in your password."
                    required
                />

                <img alt="hide-show-password" onClick={showPassword} src={state.showPassword === false ? hide : show} className="password-image image-xsmall" />
                <div>
                    <button className="btn-blue-med right" disabled={!state.canSubmit} type="submit">Login</button>
                </div>
            </Form>
        )
    }
}