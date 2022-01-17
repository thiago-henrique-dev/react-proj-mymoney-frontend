import React from "react"
import ReactDOM  from "react-dom"
import { createStore } from "redux"
import { Provider } from 'react-redux'

import reducers from './main/reducers'
import App from "./main/app"

ReactDOM.render(<App/>, document.getElementById('app'))

