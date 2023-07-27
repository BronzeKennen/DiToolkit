export default function Course( course:any ) {
    return (
    <div>
        <h1>{course.lesson_name} | {course.cid}</h1>
        <div className="course-container">
            <nav className="course-nav">
                <ul>
                    <a>About</a>
                    <a>Palia themata</a>
                </ul>
                <div className="course-about">
                    <p>{course.description}</p>
                </div>
            </nav>
        </div>
    </div>
    )
}