import React from 'react'

//This is a reusable form for 'subscriptions' and 'course not available'
export default function EmailForm(props) {

    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <input className ='form-control form-control-sm form-width-height'
                    onChange = {props.onChange}
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    id="email"
                    value={props.formValues.email}
                />
            </div>
            <button className ='form-control form-control-sm btn-blue-xl form-width-height'  type="submit" >{props.value} </button>
        </form>
    )
}








