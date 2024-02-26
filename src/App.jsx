import Header from "./components/Header";
import { AppContext } from "./context/ContextApi"
import { Outlet } from "react-router-dom";


function App() {


  return (
    <>
      <Header/>
     <Outlet />
    </>
  )
}

export default App
