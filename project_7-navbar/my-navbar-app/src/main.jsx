import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
    domain="dev-2ofiuudmorrd4snv.us.auth0.com"
    clientId="kcyvgInAGm68z2azkjI2gd2ONqXaXwYe"
    authorizationParams={{
      redirect_uri: 'https:\\locahost:5173'
    }}
  >
    <App />
  </Auth0Provider>,
)
