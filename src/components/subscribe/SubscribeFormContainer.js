import React from 'react'
import SubscriptionForm from './subscriptionForm'

export default class SubscribeFormContainer extends React.Component {
  

    render() {
        return (
            <div id = 'footer-container' className = "subscription-text">
            The latest Acaboo news, articles, and <br />
            resources, sent straight to your inbox every <br />
            month.
           <SubscriptionForm/>
            <p>We’ll never share your details. See our Privacy Policy</p>

            </div>)
    }
}




