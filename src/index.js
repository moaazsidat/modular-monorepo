import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <div>
    Root app, react version: {React.version}
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))