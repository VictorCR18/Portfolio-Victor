import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'

import { Home } from './pages/Home'
import { Media } from './components/Media'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Media/>
    <Home />
  </React.StrictMode>,
)
