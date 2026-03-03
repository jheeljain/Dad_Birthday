import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageSquare, Quote, Camera } from "lucide-react";
import debateImg from "@/assets/debate.jpeg";

const topics = [
  "Economy",
  "Politics",
  "Health",
  "Life philosophy",
  "Why waking up early fixes everything",
];

const quotes = [
  "Logically speaking…",
  "Let's break this down.",
  "Be positive.",
  "Control your brain.",
];

const DebateCorner = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="debate" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">🧠 Debate & Wisdom</p>
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-4">
            Dad vs <span className="text-gradient-navy">The World</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Candid photo + Topics */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden group"
            >
              <img 
                src={debateImg} 
                alt="Debate" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-lg text-foreground">Topics He Can Debate For Hours</h3>
              </div>
              <div className="space-y-2">
                {topics.map((topic, i) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm font-sans text-foreground">{topic}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Quotes styled as speech bubbles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <Quote className="w-5 h-5 text-primary" />
              <h3 className="font-serif text-lg text-foreground">Classic Tarun Jain Lines</h3>
            </div>
            <div className="space-y-4">
              {quotes.map((quote, i) => (
                <motion.div
                  key={quote}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative bg-card border border-border rounded-2xl rounded-bl-sm p-5 hover:border-primary/40 hover:glow-navy transition-all duration-300"
                >
                  <p className="font-serif italic text-foreground text-lg">"{quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DebateCorner;
