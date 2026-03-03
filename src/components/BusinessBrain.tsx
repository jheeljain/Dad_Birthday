import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Lightbulb, Brain, TrendingUp, Heart, Shield, Camera } from "lucide-react";
import originImg from "@/assets/origin.jpeg";

const principles = [
  { icon: Lightbulb, title: "Be positive.", desc: "Optimism isn't naive — it's strategic." },
  { icon: Brain, title: "Control your mind.", desc: "Master your thoughts, master your destiny." },
  { icon: TrendingUp, title: "Think long-term.", desc: "Plant seeds today, harvest forests tomorrow." },
  { icon: Heart, title: "Respect relationships.", desc: "People are the real wealth." },
  { icon: Shield, title: "Stay disciplined.", desc: "Consistency compounds into greatness." },
];

const BusinessBrain = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="business" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">💼 The Business Brain</p>
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-4">
            Built, <span className="text-gradient-navy">Not Born</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Success wasn't given. It was built.
          </p>
        </motion.div>

        {/* Image + Text Split */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden group"
          >
            <img 
              src={originImg} 
              alt="Origin Story" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">The Origin Story</h3>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">
              From humble beginnings to building an empire of trust and value — Tarun Jain's business journey
              is a masterclass in perseverance. Every setback was a setup for a comeback.
              Every challenge was an invitation to grow.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              What started with a vision became a legacy
              that inspires everyone around him.
            </p>
          </motion.div>
        </div>

        {/* Principles */}
        <h3 className="font-serif text-xl md:text-2xl text-center mb-8">
          The 5 Principles of <span className="text-gradient-navy">Tarun Jain</span>
        </h3>
        <div className="grid md:grid-cols-5 gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-500 hover:glow-navy group"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-serif text-sm font-semibold text-foreground mb-2">{p.title}</p>
              <p className="text-xs text-muted-foreground font-sans">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBrain;
