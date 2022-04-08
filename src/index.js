import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

function Render() {
  return (
    <App />
  )
}

const container = document.getElementById("app")
const root = ReactDOM.createRoot(container)
root.render(<Render />)
