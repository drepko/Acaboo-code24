import React from 'react'

export default function SubscribeForm(props) {

    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <p>The latest Acaboo news, articles, and <br />
                    resources, sent straight to your inbox every <br />
                    month.</p>
                <input
                    onChange = {props.onChange}
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    id="email"
                    value={props.formValues.email}
                />
            </div>

            <br />
            <input type="submit" value="Subscribe" />

            <p>We’ll never share your details. See our Privacy Policy</p>
        </form>
    )
}








