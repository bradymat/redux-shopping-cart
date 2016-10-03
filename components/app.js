import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { store } = this.props
    console.log('store', this.props.store)
    return (
      <div>
        <div>{store.getState()}</div>
        <input ref="query" type="text"/>
        <button onClick={() => store.dispatch({ type: 'ADD', value: this.refs.query.value }) }>add</button>
        <button onClick={() => store.dispatch({ type: 'REMOVE', value: this.refs.query.value }) }>remove</button>
      </div>
    )

  }
}
export default App
