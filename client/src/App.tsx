import NavBar from './Navbar';
import EctsCalculator from './pages/Ects';
import Lessons from './pages/Lessons';
import './App.css'
import { useEffect, useState } from 'react'


export var backendData:any, setBackendData:any;

function App() {

  [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);
  console.log(backendData);
  switch(window.location.pathname) {
    case "/":
        break;
    case "/lessons":
        return <Lessons/>
    case "/ects":
        return <EctsCalculator/>
  }
  return <NavBar/>;
}

export default App;