import React, { Component } from 'react'
import DemoA from './DemoA'
import DemoB from './DemoB'
// import './NoMatch.css'

export default class Demo extends Component {

    backToHome = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="message-box">
                <h2 className='text-h1' style={{textAlign: 'center'}}>React Winner Web - MobX POC</h2>
                <DemoA />
                <DemoB />
            </div>
        )
    }
}
