import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'

export default function Course( course:any ) {
    const [ aboutNav, setAboutNav ] = useState(true);

    const aboutHandler = () => {
        setAboutNav(true);
    }
    const themataHandler = () => {
        setAboutNav(false);
    }

    return (
    <div>
        <h1>{course.lesson_name} | {course.cid}</h1>
        <div className="course-container">
            <nav className="course-nav">
                <ul>
                    <motion.li onClick={aboutHandler}>About</motion.li>
                    <motion.li onClick={themataHandler}>Palia themata</motion.li>
                </ul>
                <AnimatePresence mode='wait'>
                    <motion.div
                    key={aboutNav ? 'about' : 'themata'}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="course-about"
                    >
                    {aboutNav ? about(course) : themata(course)}
                    </motion.div>
                </AnimatePresence>
            </nav>
        </div>
    </div>
    )
}


function about( course:any ) {
    return(
        <div className="cringe">
            <p>{course.description}</p>
            <p>{course.description}</p>
            <p>{course.description}</p>
            <p>{course.description}</p>
            <p>{course.description}</p>
            <p>{course.description}</p>
            <p>{course.description}</p>
            <p>{course.description}</p>
            <p>{course.description}</p>
        </div>
        )
    }

function themata(course:any) {        
    return(
        <div className="cringe">
            <p>This is the course themata page</p>
            <p>This is the course themata page</p>
            <p>This is the course themata page</p>
            <p>This is the course themata page</p>
            <p>This is the course themata page</p>
            <p>This is the course themata page</p>
            <p>This is the course themata page</p>
            <p>This is the course themata page</p>
            <p>This is the course themata page</p>
        </div>
    )
}