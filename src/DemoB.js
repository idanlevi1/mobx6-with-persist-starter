import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
// import './NoMatch.css'

const DemoB = inject("PoolGameStore")(
    observer(
        class DemoB extends Component {
            render() {
                console.log('------ DemoB props -------')
                return (
                    <div className="message-box" style={{padding: 10, backgroundColor: '#E27023'}}>
                        <p className='text-h1'>{`Component B`}</p>
                        <div className="action-link-wrap">
                            <button onClick={()=>{this.props.PoolGameStore.setMillionaireStore({ drawId:Math.random().toString(36).substring(7) , form: Math.random().toString(36).substring(7), currentGameIndex: Math.random().toString(36).substring(7), currentGameSystemIndex: Math.floor(Math.random() * 100) })}}  className="link-button">Change Millionaire data</button>
                        </div>
                    </div>
                )
            }
        }
    )
)

export default DemoB