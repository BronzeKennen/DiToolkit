import { backendData } from "../App"

export default function Lessons() {
    if(typeof backendData === 'undefined') {
        return (<p>Loading...</p>)
    } else {
        return (
            <div>
              {backendData.map((lesson:any, i:any) => (
                <div className="users" key={i}>
                  <p>{lesson.lesson_name}</p>
                  <p>Εξάμηνο: {lesson.semester}</p>
                  <p>Περιγραφή: {lesson.description}</p>
                  eclass link:<a> {lesson.eclass_link}</a>
                </div>
              ))}
            </div>
        );
    }
}