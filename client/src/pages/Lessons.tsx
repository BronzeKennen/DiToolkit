import { backendData } from "../App"
import React, { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Lessons() {
    const [dropdownStates, setDropdownStates] = useState({});
    const [animations] = useAutoAnimate<HTMLDivElement>();
    if(typeof backendData === 'undefined') {
        return (<p>Loading...</p>)
    } else {
        const semesters = [...new Set(backendData.map((l:any) => l.semester))];
        
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
                        <button id="dropButton" type="button" onClick={() => toggleDropdown(semester)}>{semester}</button>
                    {dropdownStates[semester] && (
                        <div className="dropdownSemester">
                            {semesterLessons.map((lesson:any) => (
                                <div>
                                <p className="courses" key={lesson.lesson_name}>{lesson.lesson_name}<span id="cid">{lesson.cid}</span></p>
                                
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