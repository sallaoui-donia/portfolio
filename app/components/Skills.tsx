"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";

export default function Skills() {
    const skills = [
        {
            name: "Next.js",
            icon: <SiNextdotjs className="text-gray-800 dark:text-gray-200" />,
            level: 70,
            color: "from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-100"
        },
        {
            name: "React",
            icon: <FaReact className="text-blue-500" />,
            level: 85,
            color: "from-blue-500 to-blue-400"
        },
        {
            name: "TypeScript",
            icon: <SiTypescript className="text-blue-600" />,
            level: 80,
            color: "from-blue-600 to-blue-500"
        },
        {
            name: "Node.js",
            icon: <FaNodeJs className="text-green-500" />,
            level: 80,
            color: "from-green-500 to-green-400"
        },
        {
            name: "HTML5",
            icon: <FaHtml5 className="text-orange-500" />,
            level: 95,
            color: "from-orange-500 to-orange-400"
        },
        {
            name: "CSS3",
            icon: <FaCss3Alt className="text-blue-400" />,
            level: 90,
            color: "from-blue-400 to-blue-300"
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="text-cyan-400" />,
            level: 85,
            color: "from-cyan-400 to-cyan-300"
        },
        {
            name: "JavaScript",
            icon: <SiJavascript className="text-yellow-500" />,
            level: 85,
            color: "from-yellow-500 to-yellow-400"
        },
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        },
    };

    return (
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 max-w-4xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                    Mes <span className="text-blue-500">Expertises</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Technologies que je maîtrise pour créer des solutions performantes
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ y: -5 }}
                        className="group relative bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                    >
                        {/* Effet de fond au survol */}
                        <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 ${skill.color}`}></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="p-2 sm:p-3 rounded-md sm:rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors">
                                    <span className="text-xl sm:text-2xl">{skill.icon}</span>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 mb-1 sm:mb-2">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.1, type: "spring" }}
                                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                />
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500 dark:text-gray-400">Maîtrise</span>
                                <span className="text-xs sm:text-sm font-medium text-blue-500">{skill.level}%</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}