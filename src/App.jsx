import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
    <main className="app-container">
   <Outlet/>
    </main>
    </>
  )
}

export default App
