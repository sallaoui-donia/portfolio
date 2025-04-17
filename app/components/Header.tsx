
import { motion } from "framer-motion";


export default function Headers () {




    return (

        <>
        
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
  <div className="container mx-auto px-6 py-4">
    <div className="flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center space-x-2"
      >
        <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
          <span className="text-white font-medium text-sm">SD</span>
        </div>
        <span className="text-xl font-semibold text-gray-800 dark:text-white">Salaoui Donia</span>
      </motion.div>

      <nav className="hidden md:flex space-x-8">
        {['Accueil', 'Compétences', 'Expériences'].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase()}`}
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
          >
            {item}
          </a>
        ))}
      </nav>

      <button className="md:hidden text-gray-600 dark:text-gray-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</header>
        
        </>
    )



}