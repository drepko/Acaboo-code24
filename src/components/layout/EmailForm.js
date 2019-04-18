import React from 'react'

//This is a reusable form for 'subscriptions' and 'course not available'
export default function EmailForm(props) {

    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <input id = 'email-input' className ='form-control form-control-sm form-width-height'
                    onChange = {props.onChange}
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    id="email"
                    value={props.formValues.email}
                />
            </div>
            <button id ='email-button' className ='form-control form-control-sm'  type="submit" >{props.value} </button>
        </form>
    )
}








