import React, { Component } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export default class RootComponent extends Component {

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <h2>React Web - MobX 6 POC</h2>
                    <h3>With Persist & without Decorators</h3>
                </div>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        )
    }
}
