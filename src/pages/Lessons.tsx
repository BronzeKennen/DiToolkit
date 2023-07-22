import { backendData } from "../App"
import React, { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

export default function Courses() {
    const [dropdownStates, setDropdownStates] = useState({});
    const [animations] = useAutoAnimate<HTMLDivElement>();
    if(typeof backendData === 'undefined') {
        return (<p>Loading...</p>)
    } else {
        const semesters = [...new Set(backendData.map((l:any) => l.semester))].sort();
        
        const toggleDropdown = (semester:any) => {
            setDropdownStates((prevState:any) => ({
              ...prevState,
              [semester]: !prevState[semester],
            }));
          };        

        return (
            <div>
              {semesters.map((semester:any) => {
                const semesterLessons = backendData.filter(
                    (lesson:any) => lesson.semester === semester
                );
                return(
                    <div key={semester} id="buttonDiv" ref={animations}>
                        <motion.button  className="dropButton"
                        type="button"
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px orange"
                            }}
                        onClick={() => toggleDropdown(semester)}>{semester}</motion.button>
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
