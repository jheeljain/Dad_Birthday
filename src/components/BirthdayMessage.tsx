import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Camera } from "lucide-react";
import usImg from "@/assets/us.jpeg";

const BirthdayMessage = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="birthday" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background with image */}
      <div className="absolute inset-0">
        <img src={usImg} alt="" className="w-full h-full object-cover object-[center_top]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-6xl font-serif font-bold leading-tight mb-8">
            The world has seen 51 years of{" "}
            <span className="text-gradient-navy">Tarun Jain.</span>
          </h2>

          <p className="text-xl md:text-3xl font-serif italic text-muted-foreground mb-12">
            The best chapters are still being written.
          </p>

          <div className="border border-border rounded-2xl p-8 md:p-12 bg-card/60 backdrop-blur-md">
            <h3 className="font-serif text-xl text-foreground mb-4">A Personal Birthday Letter</h3>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-2xl mx-auto">
              Dear Papa, wish you a very happy birthday! Your journey of 51 years is a testament to resilience,
               love, and wisdom. From your early mornings to your late-night debates, every moment has been a lesson in perseverance
                and growth. Your dedication to family, business, and self-improvement inspires us all. Here's to many more years of
                 health, happiness, and unforgettable memories. We love you!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdayMessage;
