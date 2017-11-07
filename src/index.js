import React from 'react'
import ReactDOM from 'react-dom'
import App1 from './packages/app-1'
import App2 from './packages/app-2'
import './index.css'

const App = () => (
  <div className="root-div">
    Root app, react version: {React.version}
    <App1/>
    <App2/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))