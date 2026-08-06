import { motion } from "framer-motion";
import {
    Brain,
    BookOpen,
    Users,
    Lightbulb,
    Laptop,
    Medal
} from "lucide-react";

function Curriculum() {

    const curriculum = [

        {
            icon:<Brain size={30}/>,
            title:"Critical Thinking",
            description:"Learners develop analytical and problem-solving skills through practical learning."
        },

        {
            icon:<BookOpen size={30}/>,
            title:"CBC Learning",
            description:"Competency Based Curriculum equips learners with practical life skills."
        },

        {
            icon:<Users size={30}/>,
            title:"Collaboration",
            description:"Teamwork encourages communication, leadership and confidence."
        },

        {
            icon:<Lightbulb size={30}/>,
            title:"Creativity",
            description:"Innovation and imagination are encouraged in every learning area."
        },

        {
            icon:<Laptop size={30}/>,
            title:"Digital Literacy",
            description:"Technology is integrated into learning to prepare learners for the modern world."
        },

        {
            icon:<Medal size={30}/>,
            title:"Academic Excellence",
            description:"Every learner is encouraged to achieve their highest potential."
        }

    ];

    return(

        <section className="py-24 bg-white dark:bg-gray-950">

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <motion.div

                    initial={{opacity:0,y:40}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}

                    className="max-w-3xl mx-auto text-center"
                >

                    <span className="uppercase text-purple-600 font-semibold tracking-widest">

                        Curriculum

                    </span>

                    <h2 className="mt-5 text-5xl font-black dark:text-white">

                        Learning Beyond Books

                    </h2>

                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">

                        Our CBC programme develops knowledge, practical skills,
                        innovation and leadership through learner-centred education.

                    </p>

                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                    {curriculum.map((item,index)=>(

                        <motion.div

                            key={item.title}

                            initial={{opacity:0,y:40}}
                            whileInView={{opacity:1,y:0}}

                            transition={{
                                delay:index*.15
                            }}

                            whileHover={{
                                y:-8
                            }}

                            viewport={{once:true}}

                            className="rounded-3xl p-8 shadow-lg border border-purple-100 bg-white dark:bg-gray-900 dark:border-gray-800"

                        >

                            <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">

                                {item.icon}

                            </div>

                            <h3 className="mt-6 text-2xl font-bold dark:text-white">

                                {item.title}

                            </h3>

                            <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">

                                {item.description}

                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default Curriculum;