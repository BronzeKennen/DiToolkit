import { lessons } from "../App"
import React, { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

// const { data: lessons, error } = await supabase
//     .from('lessons')
//     .select('*')



export default function Courses() {
    const [dropdownStates, setDropdownStates] = useState({});
    const [animations] = useAutoAnimate<HTMLDivElement>();
    if(!lessons){
        return (<p>Loading...</p>)
    } else {
        const semesters = [...new Set(lessons.map((l:any) => l.semester))].sort();
        
        const toggleDropdown = (semester:any) => {
            setDropdownStates((prevState:any) => ({
              ...prevState,
              [semester]: !prevState[semester],
            }));
          };        

        return (
            <div>
              {semesters.map((semester:any) => {
                if(!lessons) return;
                const semesterLessons = lessons.filter(
                    (lesson:any) => lesson.semester === semester
                );
                return(
                    <div key={semester} id="buttonDiv" ref={animations}>
                        <motion.button  className="dropButton"
                        type="button"
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 10px green"
                            }}
                        onClick={() => toggleDropdown(semester)}><span id="semesterNum">{semester}</span><p id="courseCount">Μαθήματα: {semesterLessons.length}</p></motion.button>
                    {dropdownStates[semester as keyof unknown] && (
                        <div className="dropdownSemester">
                            {semesterLessons.map((lesson:any) => (
                                <div key={lesson.lesson_name}>
                                <Link className="courses" key={lesson.lesson_name} to={lesson.cid}>{lesson.lesson_name}<span id="cid">{lesson.cid}</span></Link>
                                
                                </div>
                            ))}
                        </div>
                    )}
                   </div>
                )})}
            </div>
        );
    }
}
