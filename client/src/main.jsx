import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes/routeConfig'
import { store } from './redux/store'
import './styles/global.css'
import ThmeProvider from './provider/ThmeProvider'
// import ThmeProvider from './provider/ThmeProvider'

ReactDOM.createRoot(document.getElementById('cssp-app')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThmeProvider>
        <RouterProvider router={createBrowserRouter(routes)}/>
      </ThmeProvider>
    </Provider>
  </React.StrictMode>,
)
