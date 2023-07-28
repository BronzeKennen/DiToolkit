import { Link , useLocation } from 'react-router-dom' 
import { useState, useEffect } from 'react'

export default function NavBar() {

    const location = useLocation();
    const [url, setUrl] = useState();
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    return(
        <div>
            <nav className="nav">
                <Link className="active" to="/home">DiToolkit</Link>
                <ul>
                    <li className={(url === "/home" ? "active" : "")}><Link  to="/home">Home</Link></li>
                    <li className={(url === "/courses" ? "active" : "")}><Link  to="/courses">Μαθηματα</Link> </li>
                    <li className={(url === "/ects" ? "active" : "")}> <Link  to="/ects">ECTS Calculator</Link> </li>
                </ul>
                <ul className='login-section'>
                    <li className={(url === "/login" ? "active" : "")}><Link  to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}