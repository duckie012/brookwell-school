import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { getHomepageData } from "../../api/homepage";

function Hero() {

    const [hero, setHero] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadHero() {

            try {

                const data = await getHomepageData();

                setHero(data.hero);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        }

        loadHero();

    }, []);

    if (loading)

        return (
            <section className="h-screen flex items-center justify-center">
                Loading...
            </section>
        );

    if (!hero) return null;

    return (

        <section
            className="relative h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${hero.backgroundImage})`,
            }}
        >

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl text-white"
                >

                    <h1 className="text-6xl font-black">

                        {hero.title}

                    </h1>

                    <p className="mt-8 text-xl">

                        {hero.subtitle}

                    </p>

                    <Link
                        to="/admissions"
                        className="inline-flex items-center gap-3 mt-10 bg-purple-700 px-8 py-4 rounded-xl"
                    >

                        {hero.buttonText}

                        <ChevronRight size={18} />

                    </Link>

                </motion.div>

            </div>

        </section>

    );

}

export default Hero;