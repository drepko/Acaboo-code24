import React from 'react'

//This is a reusable form for 'subscriptions' and 'course not available'
export default function EmailForm(props) {

    return (
        <form onSubmit={props.onSubmit}>
            <div>
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
        </form>
    )
}








