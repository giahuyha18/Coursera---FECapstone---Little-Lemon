import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OnlineOrder from './components/OnlineOrder';
import ReserveTable from './components/ReserveTable';
import {Routes, Route} from "react-router-dom"
function App() {
  return(
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/reservetable" element = {<ReserveTable/>} />
          <Route path = "/onlineorder" element = {<OnlineOrder/>} />
        </Routes>
      </div>
    </>
  )
}

export default App;
