"use client"; // Nécessaire pour les animations

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaCode } from "react-icons/fa";

export default function Experience() {
    const experiences = [
        {
          title: "Développeur Full Stack",
          company: "Cytekia, Tunis",
          period: "2022 - Présent",
          description: [
            "Développement Full-Stack en ReactJS, Next js, TypeScript, <Vue.js, Node.js et NestJS avec architecture modulaire." , 
            "Implémentation d'authentification sécurisée via Keycloak, JWT et OAuth2.",
            "Optimisation des bases de données MongoDB et PostgreSQL.",
            "Migration d'API REST vers GraphQL (réduction de 34% du temps de transfert).",
            "Mise en place de pipelines CI/CD avec GitLab et Docker.",
            "Adoption de méthodologie Scrum (amélioration productivité de 20%)."
          ],
          tags: ["ReactJS", "Next.js" , "Vue.js", "TypeScript", "Node.js", "NestJS", "MongoDB", "PostgreSQL", "GraphQL", "Docker"]
        },
        {
          title: "Stagiaire Ingénieur Logiciel",
          company: "Inoteqia, Tunis",
          period: "Janvier 2022 - Juillet 2022 (6 mois)",
          description: [
            "Développement d'une plateforme web de Gestion des Risques et Conformité (GRC).",
            "Mise en place de gestion des rôles/permissions avec Keycloak.",
            "Optimisation des performances et temps de réponse.",
            "Création de tableaux de bord interactifs pour indicateurs de risque.",
            "Intégration de bonnes pratiques de développement web."
          ],
          tags: ["React.js", "Node.js", "TypeScript", "MongoDB", "Keycloak", "Redux"]
        },
        {
          title: "Développeur Freelance",
          company: "MiGSENS, Tunis",
          period: "Projet freelance",
          description: [
            "Développement du site web pour la startup MiGSENS." ,
            "Hébergement sur Oxahost."
          ],
          tags: ["HTML", "CSS", "JavaScript"]
        },
        
      ];

      

  // Animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="expériences" className="py-20">
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-center mb-16"
             >
               <h2 className="text-4xl font-bold mb-4">Mon <span className="text-blue-500">Expérience</span></h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                 Mon parcours professionnel et mes réalisations
               </p>
             </motion.div>
   
             <div className="relative">
               {/* Timeline bar */}
               <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400"></div>
   
               {experiences.map((exp, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5 }}
                   className={`mb-12 flex ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                 >
                   <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                     <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative">
                       <div className={`absolute top-6 ${i % 2 === 0 ? '-right-2' : '-left-2'} w-4 h-4 bg-blue-500 transform rotate-45`}></div>
                       <div className="flex items-center gap-4 mb-4">
                         <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500">
                           <FaBriefcase />
                         </div>
                         <div>
                           <h3 className="text-xl font-bold">{exp.title}</h3>
                           <p className="text-blue-500">{exp.company}</p>
                         </div>
                       </div>
                       <div className="flex items-center gap-2 text-gray-500 mb-4">
                         <FaCalendarAlt />
                         <span>{exp.period}</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-1">
  {exp.description.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
                       <div className="flex flex-wrap gap-2">
                         {exp.tags.map((tag, j) => (
                           <span key={j} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                             {tag}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
           </section>
  );
}