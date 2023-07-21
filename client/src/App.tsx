import NavBar from './Navbar';
import EctsCalculator from './pages/Ects';
import Lessons from './pages/Lessons';
import './App.css'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export var backendData:any, setBackendData:any;

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  
  import.meta.env.VITE_SUPABASE_PASSWORD
);


const { data: lessons, error } = await supabase
  .from('lessons')
  .select('*')

  
function App() {
  [backendData, setBackendData] = useState([]);

  useEffect(() => {
    setBackendData(lessons);
  })
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