import { motion } from "framer-motion";
import { School2 } from "lucide-react";

function ClassLevels() {

    const levels=[

        "Playgroup",

        "PP1",

        "PP2",

        "Grade 1",

        "Grade 2",

        "Grade 3",

        "Grade 4",

        "Grade 5",

        "Grade 6",

        "Grade 7"

    ];

    return(

        <section className="py-24 bg-gray-50 dark:bg-gray-900">

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <div className="text-center max-w-3xl mx-auto">

                    <span className="uppercase font-semibold text-purple-600">

                        Class Levels

                    </span>

                    <h2 className="mt-5 text-5xl font-black dark:text-white">

                        Education At Every Stage

                    </h2>

                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">

                        Every level is carefully designed to support holistic
                        growth academically, socially and emotionally.

                    </p>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">

                    {levels.map((level,index)=>(

                        <motion.div

                            key={level}

                            initial={{opacity:0,y:40}}

                            whileInView={{opacity:1,y:0}}

                            transition={{

                                delay:index*.08

                            }}

                            whileHover={{

                                scale:1.05,

                                y:-5

                            }}

                            viewport={{once:true}}

                            className="rounded-3xl bg-white dark:bg-gray-950 shadow-lg p-8 text-center"

                        >

                            <School2

                                size={35}

                                className="mx-auto text-purple-600"

                            />

                            <h3 className="mt-5 text-xl font-bold dark:text-white">

                                {level}

                            </h3>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default ClassLevels;