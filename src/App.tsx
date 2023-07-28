import Home from './pages/Home';
import NavBar from './Navbar';
import EctsCalculator from './pages/Ects';
import Courses from './pages/Lessons';
import Course from './pages/Course';
import Login from './pages/Login'
import './App.css'
import { createClient } from '@supabase/supabase-js'
import { 
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Outlet,
    RouterProvider
} from 'react-router-dom' 


export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  
  import.meta.env.VITE_SUPABASE_PASSWORD
);

export const { data: lessons, error } = await supabase
    .from('lessons')
    .select('*')


function App() {
    const headers:Array<string> = [];
    if(lessons) {
        for(let i = 0; i < lessons?.length; i++) {
            headers.push(lessons[i].cid);
        }
    }
    const router = createBrowserRouter(
        createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route path="/home" index element={<Home/>}/>
            {headers.map((header, index) => {
                let lesson;
                if(lessons) lesson = lessons[index]
                if(lesson)
                return (<Route 
                    key={header}
                    path={`courses/${header}/`} 
                    element={<Course lesson_name={lesson.lesson_name} cid={lesson.cid}
                    description={lesson.description} />}/>)            
            })}
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/ects" element={<EctsCalculator/>}/>
            <Route path="/login" element={<Login/>}/>
        </Route>
        )
    )

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