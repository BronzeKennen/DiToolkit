import { Link } from 'react-router-dom' 


export default function NavBar() {
    return(
        <div className="container">
            <nav className="nav">
                <Link to="/">DiToolkit</Link>
                <ul>
                    <li className="active"><Link to="/courses">Μαθηματα</Link> </li>
                    <li> <Link to="/ects">ECTS Calculator</Link> </li>
                </ul>
            </nav>
        </div>
    )
}


