import NavBar from './Navbar';
import EctsCalculator from './pages/Ects';
import Lessons from './pages/Lessons';
import './App.css'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider
} from 'react-router-dom' 


export let backendData:any|null;

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  
  import.meta.env.VITE_SUPABASE_PASSWORD
);

const { data: lessons, error } = await supabase
      .from('lessons')
      .select('*')

  
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>

        <Route path="/courses" element={<Lessons/>}/>
        <Route path="/ects" element={<EctsCalculator/>}/>

      </Route>
    )
  )


  useEffect(() => { 
    backendData = lessons;
  })
  return (
    <div>
    <RouterProvider router={router}/>
    </div>);
}

const Root = () => {
  return (
      <>
        <NavBar/>
        <div>
          <Outlet/>
        </div>
      </>)
}

export default App;