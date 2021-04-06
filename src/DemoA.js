import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
// import './NoMatch.css'

const DemoA = inject("PoolGameStore")(
    observer(
        class DemoA extends Component {
            render() {
                console.log(`DemoA: millionaire: ${JSON.stringify(this.props.PoolGameStore.getMillionaireStore)}`)
                return (
                    <div className="message-box" style={{padding: 10, backgroundColor: '#4884'}}>
                        <p className='text-h1'>{`Component A`}</p>
                        <p className='text-h1'>{`getMillionaireStore: ${this.props.PoolGameStore.getMillionaireStore.drawId}`}</p>
                    </div>
                )
            }
        }
    )
)

export default DemoA