import { backendData } from "../App"
import React, { useState } from 'react'

export default function Lessons() {
    const [dropdownStates, setDropdownStates] = useState({});
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
                   <div key={semester} id="buttonDiv">
                        <button id="dropButton" type="button" onClick={() => toggleDropdown(semester)}>{semester}</button>
                    {dropdownStates[semester] && (
                        <div className="dropdownSemester">
                            {semesterLessons.map((lesson:any) => (
                                <p key={lesson.lesson_name}>{lesson.lesson_name}</p>
                            ))}
                        </div>
                    )}
                   </div>
                )})}
            </div>
        );
    }
}