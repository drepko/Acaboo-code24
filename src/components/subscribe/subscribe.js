import React, { PureComponent } from 'react'

export default class SubscribeForm extends PureComponent {
    state = []

    handleSubmit = (event) => {
        event.preventDefault()
        //this.onSubmit(this.state)
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <p>The latest Acaboo news, articles, and <br/>
                    resources, sent straight to your inbox every <br/>
                    month.</p>
                    <input 
                    placeholder="Email Address"
                    type="email" 
                    name="email" 
                    id="email" 
                    value={this.state.email || ''} 
                    onChange={this.handleChange} 
                    />
                </div>

                <br/>
                <button type="submit">Subscribe</button>
                <p>We’ll never share your details. See our Privacy Policy</p>
            </form>
        )
    }
}
