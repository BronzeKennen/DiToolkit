export default function Course( course:any ) {
    return (
    <div>
        <h1>{course.lesson_name}</h1>
        <h2>Course id: {course.cid}</h2>
        <h2>Description: {course.description}</h2>
    </div>
    )
}