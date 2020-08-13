import React from 'react'
import {render} from 'react-dom'
//import App from './components/App'
import './styles.css'

const App = () => <p>dom render</p>

const rootElement = document.getElementById('root')
render(<App />, rootElement)
