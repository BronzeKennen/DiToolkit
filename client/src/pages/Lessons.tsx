import { backendData } from "../App"

export default function Lessons() {
    if(typeof backendData.lessons === 'undefined') {
        return (<p>Loading...</p>)
    } else {
        return (
            <div>
              {backendData.lessons.map((lesson:any, i:any) => (
                <p className="users" key={i}>{lesson}</p>
              ))}
            </div>
        );
    }
}