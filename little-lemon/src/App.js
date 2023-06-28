import './App.css';
import './styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OnlineOrder from './components/OnlineOrder';
import ReserveTable from './components/ReserveTable';
import Footer from './components/Footer';
import {Routes, Route} from "react-router-dom"
import { AlertProvider } from './components/context/alertContext';
import { ChakraProvider } from "@chakra-ui/react";
import Alert from "./components/Alert";

function App() {
  return(
  <ChakraProvider>
      <AlertProvider>
          <Navbar/>
          <div className='container'>
            <Routes>
              <Route path = "/" element = {<Home/>} />
              <Route path = "/reservetable" element = {<ReserveTable/>} />
              <Route path = "/onlineorder" element = {<OnlineOrder/>} />
            </Routes>
          </div>
          <Footer/>
          <Alert />
      </AlertProvider>
    </ChakraProvider>
  )
}

export default App;
