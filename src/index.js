import React from 'react'
import ReactDOM from 'react-dom'
import App1 from './packages/app-1'
import App2 from './packages/app-2'

const App = () => (
  <div style={{fontFamily: 'sans-serif', border: '1px solid red', padding: '0.5em', width: '300px'}}>
    Root app, react version: {React.version}
    <App1/>
    <App2/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))