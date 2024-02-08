import React from 'react'
import ReactDOM from 'react-dom/client'
import Route from "./route"

function App() {

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Route />
    </React.StrictMode>,
  )
}
export default App
