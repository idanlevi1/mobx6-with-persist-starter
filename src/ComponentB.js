import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import faker from 'faker';

const ComponentB = inject("GameStore", "UserStore")(
    observer(
        class ComponentB extends Component {
            render() {
                console.log('------ B render -------')
                return (
                    <div style={{ width: '50%', margin: 10, padding: 10, backgroundColor: this.props.UserStore.getUserColor || '#E27023', borderRadius: 5 }}>
                        <p>{`Component B`}</p>
                        <div>
                            <button onClick={() => { this.props.GameStore.setGame({ id: Math.floor(Math.random() * 100), type: Math.random().toString(36).substring(7), name: faker.company.companyName() }) }} className="link-button">Change Millionaire data</button>
                        </div>
                    </div>
                )
            }
        }
    )
)

export default ComponentB