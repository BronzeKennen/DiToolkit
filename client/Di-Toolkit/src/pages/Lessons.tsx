import { backendData } from "../App"

export default function Lessons() {
    if(typeof backendData.users === 'undefined') {
        return (<p>Loading gtps</p>)
    } else {
        return (
            <div>
              {backendData.users.map((user:any, i:any) => (
                <p key={i}>{user}</p>
              ))}
            </div>
        );
    }
}