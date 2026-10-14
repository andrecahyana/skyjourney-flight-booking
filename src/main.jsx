import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import './index.css'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { setUser } from './store/authSlice'

// Listen to Firebase auth state and update redux store
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(setUser({ uid: user.uid, email: user.email, displayName: user.displayName }))
  } else {
    store.dispatch(setUser(null))
  }
})

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
