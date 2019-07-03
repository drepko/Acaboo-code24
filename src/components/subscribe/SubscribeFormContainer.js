import React from 'react'
import SubscriptionForm from './subscriptionForm'

export default class SubscribeFormContainer extends React.Component {
  

    render() {
        return (
            <div id = 'footer-container' className="subscription-text">
            <p className="text-sm-grey">The latest Acaboo news, articles, and <br />
            resources, sent straight to your inbox every <br />
            month.</p>
            <SubscriptionForm/>
            <p className="text-xs-grey" >We’ll never share your details. See our Privacy Policy</p>

            </div>)
    }
}




