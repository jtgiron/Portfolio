import React from 'react'
import ReactDOM from 'react-dom/client'
import {MainSection} from '../src/components/main-section'
import {NavBar} from '../src/components/nav-section'
import './global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <NavBar />
    <MainSection />

  </>
)
