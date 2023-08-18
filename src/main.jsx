/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseContext } from './store/FirebaseContext.jsx'
import firebase from './firebase/config.js'
import Context from './store/FirebaseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseContext.Provider value={{firebase}}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>
)
