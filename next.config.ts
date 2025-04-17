import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Génère des fichiers HTML/CSS/JS statiques
  images: {
    unoptimized: true, // Désactive l'optimisation avancée (requise pour 'output: export')
  },
  trailingSlash: true, // Optionnel : garantit des URLs cohérentes
};

export default nextConfig;