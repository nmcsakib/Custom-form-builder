import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Form from './pages/Form'
import App from './App'
import CreateNew from './pages/CreateNew'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <CreateNew/>
      },
      {
        path: "/build-form",
        element: <Form/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router}/>
 
)
