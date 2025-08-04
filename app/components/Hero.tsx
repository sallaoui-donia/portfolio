"use client";
import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {

    const handleContactClick = () => {
        window.location.href = "mailto:sallaouidonia@gmail.com?subject=Contact portfolio";
    };

    return (

        <>
            <section id="accueil" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Partie Texte */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg font-medium text-blue-500 mb-4"
                            >
                                Salut, je m'appelle
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800 dark:text-white"
                            >
                                Salaoui <span className="text-blue-500">Donia</span>
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
                            >
                                Développeuse Full Stack
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed"
                            >
                                Je conçois et développe des applications web performantes avec les dernières technologies comme React, Next.js et Node.js.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap gap-4 mb-8"
                            >
                                <motion.a
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="/documents/cv_donia_salaoui.pdf"
                                    download="CV_DoniaSalaoui.pdf"
                                    aria-label="Télécharger le CV au format PDF"
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    <FiDownload className="text-lg" />
                                    <span>Télécharger CV</span>
                                </motion.a>



                                <motion.button
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleContactClick}
                                    className="flex items-center gap-2 bg-white-600  px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    Contactez-moi
                                </motion.button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex gap-6"
                            >
                                <motion.a
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    href="https://github.com/sallaoui-donia"
                                    target="_blank"
                                    className="text-2xl text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FiGithub />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    href="https://www.linkedin.com/in/donia-salaoui-a59710181/"
                                    target="_blank"
                                    className="text-2xl text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <FiLinkedin />
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Partie Photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="order-1 lg:order-2 flex justify-center"
                        >
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">

                                <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-lg opacity-70"></div>
                                <img
                                    src="/photoprofil2.png"
                                    alt="Salaoui Donia - Développeuse Full Stack"
                                    className="relative w-full h-full object-cover rounded-full shadow-xl border-4 border-white dark:border-gray-800"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Animation CSS */}
                <style jsx>{`
    @keyframes spin-slow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .animate-spin-slow { animation: spin-slow 30s linear infinite; }
  `}</style>
            </section>


        </>


    )

}