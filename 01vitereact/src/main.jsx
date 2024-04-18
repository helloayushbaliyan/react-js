import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const ownreact = React.createElement(
  `a`,
  {href:`  https://www.google.com/  `},
  `click me`
)
ReactDOM.createRoot(document.getElementById('root')).render(
    ownreact
)
