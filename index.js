import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { createStore } from 'redux'
var _ = require('lodash')


const initialState = {
  items: []
}

function reducer (state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state+random(action.value)
    case 'REMOVE':
      return state-random(action.value)
    default:
      return state
  }
}
function random (num) {
  return _.random(0,num)
}
const store = createStore(reducer)
const rootEl = document.querySelector('main')

const render = () => {
    console.log('logging state', store.getState())
    ReactDOM.render(
      <App store={store}/>,
      rootEl
  )
}

render()
store.subscribe(render)
