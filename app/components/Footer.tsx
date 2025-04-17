import React from 'react'
import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

export default function Footer() {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex justify-center gap-6 mb-6">
                        <motion.a whileHover={{ y: -3 }} href="https://github.com/sallaoui-donia">
                            <FiGithub className="text-2xl" />
                        </motion.a>
                        <motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/in/donia-salaoui-a59710181/">
                            <FiLinkedin className="text-2xl" />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3 }}
                            href="mailto:sallaouidonia@gmail.com"
                            aria-label="Envoyer un email"
                            className="hover:text-blue-500 transition-colors"
                        >
                            <FiMail className="text-2xl" />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3 }}
                            href="tel:+33769072192"
                            aria-label="Téléphoner"
                            className="hover:text-green-500 transition-colors"
                        >
                            <FiPhone className="text-2xl" />
                        </motion.a>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 text-sm">
                        <a href="mailto:sallaouidonia@gmail.com" className="hover:text-blue-400">
                            sallaouidonia@gmail.com
                        </a>
                        <span className="hidden sm:inline">|</span>
                        <a href="tel:+33769072192" className="hover:text-green-400">
                            +33 7 69 07 21 92
                        </a>
                    </div>

                    <p>© {new Date().getFullYear()} SD'Portfolio. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    )
}