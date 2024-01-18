import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ComponentWrapper } from './Selector.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ComponentWrapper>
      <App />
    </ComponentWrapper>
  </React.StrictMode>,
)
