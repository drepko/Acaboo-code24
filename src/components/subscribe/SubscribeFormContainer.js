import React from 'react'
import SubscriptionForm from './subscriptionForm'

export default class SubscribeFormContainer extends React.Component {
  

    render() {
        return (
            <div>
            <p>The latest Acaboo news, articles, and <br />
            resources, sent straight to your inbox every <br />
            month.</p>
           <SubscriptionForm/>
            <p>We’ll never share your details. See our Privacy Policy</p>

            </div>)
    }
}




