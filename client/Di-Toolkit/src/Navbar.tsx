function NavBar() {
    return(
        <nav className="nav">
            <a href="/" className="DiToolkit">DiToolkit</a>
            <ul>
                <li className="active"> <a href="/lessons">Μαθηματα</a> </li>
                <li> <a href="/ects">ECTS Calculator</a> </li>
            </ul>
        </nav>
    )
}


export default NavBar;