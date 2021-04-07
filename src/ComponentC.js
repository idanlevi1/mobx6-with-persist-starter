import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import faker from 'faker';

const ComponentC = inject("UserStore")(
    observer(
        class ComponentC extends Component {
            render() {
                console.log('------ C Render -------')
                return (
                    <div style={{ width: '50%', margin: 10, padding: 10, backgroundColor: '#A372A9', borderRadius: 5 }}>
                        <p>{`Component B`}</p>
                        <div>
                            <button onClick={() => this.props.UserStore.setUser(faker.random.word(), faker.commerce.color())} className="link-button">Change username and color of component B</button>
                        </div>
                    </div>
                )
            }
        }
    )
)

export default ComponentC