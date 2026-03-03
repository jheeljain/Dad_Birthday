import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpeg";

const HeroSection = () => {
  const handleExplore = () => {
    document.querySelector("#travel")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
      <img
        src={heroBg}
        alt=""
        className="w-full h-full object-cover object-top"
      />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-4"
        >
          Tarun Jain – 51 & Still Just
          <br />
          Getting Started
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground font-sans text-sm md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          A traveler of worlds. A builder of businesses. A runner of miles. A master of debates.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-serif text-xl md:text-3xl italic text-foreground mb-3"
        >
          "Be positive."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="font-serif text-sm md:text-lg text-muted-foreground italic mb-20"
        >
          "Don't let your brain control you. You control your brain."
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2 } }}
          onClick={handleExplore}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
