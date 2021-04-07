import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

const ComponentA = inject("GameStore", "UserStore")(
    observer(
        class ComponentA extends Component {
            render() {
                console.log('------ A Render -------', this.props.GameStore.getGameData.id, this.props.UserStore.getUsername)
                return (
                    <div style={{ width: '50%', margin: 10, padding: 10, backgroundColor: '#4884', borderRadius: 5 }}>
                        <p>{`Component A`}</p>
                        <p>{`Game Data Id: ${this.props.GameStore.getGameData.id}`}</p>
                        <p>{`Game Name: ${this.props.GameStore.getGameName}`}</p>
                        <p>{`Username: ${this.props.UserStore.getUsername}`}</p>
                        <button onClick={() => { this.props.GameStore.clearStore() }} className="link-button">Clear LocalStorage GameStore data</button>
                        <br /><br />
                        <button onClick={() => { this.props.UserStore.clearStore() }} className="link-button">Clear LocalStorage UserStore data</button>
                    </div>
                )
            }
        }
    )
)

export default ComponentA