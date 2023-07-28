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
    <div className="container">
        <h2>{course.lesson_name} | {course.cid}</h2>
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
    const objects = ['1','2','3','4']; //example, will be replaced with the actual announcements fetched
    return(
        <div className="about">
            <div className="desc">
                {/* <p>{course.description}</p> */}
                <h3>Course Description:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ad aut autem commodi dolore, quisquam deleniti blanditiis sapiente voluptatem a doloremque incidunt officiis molestias, beatae consequatur explicabo recusandae! Facilis, quisquam.</p>
            </div>
            <div className="announcements">
                <table className="announcementsTable">
                        {objects.map((item, index) => {
                            const updatedInterval = 0.15 + index * 0.20;
                            return(
                                <tr key={index}>
                                    <motion.td
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 0 }}
                                        transition={{ duration: updatedInterval }}
                                        >
                                        Announcement Title
                                        <br></br><span>28/7 - 16:10</span>
                                    </motion.td>
                                </tr>
                            )
                        })}
                </table>
            </div>
        </div>
        )
    }
    
    function themata(course:any) {
        const year = ['2018 June', '2018 September' ,'2019 September', '2020 June' , '2022 June' , '2022 September'];
        return(
            <div className="themata">
            {year.map((item, index) => {
                const updatedInterval = index * 0.10;
                return(
                    <div className="themata-buttons">
                        <motion.button
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: updatedInterval }}
                        whileHover={{
                            boxShadow: "0px 0px 10px purple",
                            textShadow: "0px 0px 8px blue"
                        }}
                        >
                            {item}
                        </motion.button>
                    </div>
                )    
        })}
        </div>
    )
}