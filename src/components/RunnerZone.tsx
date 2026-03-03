import { motion } from "framer-motion";
import { useScrollReveal, useCounter } from "@/hooks/useScrollReveal";
import { Trophy, Flame, Target, Timer, Camera } from "lucide-react";
import runningImg from "@/assets/running.jpeg";

const milestones = [
  { year: "Early Days", text: "The first morning run that started it all." },
  { year: "Marathon Mode", text: "From jogs to serious long-distance runs." },
  { year: "Obstructions", text: "Asthma tried to stop him, but he believed in himself." },
  { year: "Today", text: "51 and running stronger than ever." },
];

const badges = [
  { icon: Flame, label: "Streak Master" },
  { icon: Trophy, label: "Consistency King" },
  { icon: Target, label: "Goal Crusher" },
  { icon: Timer, label: "Early Riser" },
];

const runnerStats = [
  { label: "Years of Discipline", value: 10, suffix: "+" },
  { label: "Early Mornings", value: 3650, suffix: "+" },
  { label: "Personal Milestones", value: 25, suffix: "+" },
];

const RunnersZone = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="runner" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">🏃 The Runner's Zone</p>
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-4">
            Miles & <span className="text-gradient-navy">Mindset</span>
          </h2>
          <p className="text-muted-foreground font-sans">
            Some people hit snooze. He hits the pavement.
          </p>
        </motion.div>

        {/* Horizontal scrolling gallery */}
        <div className="flex gap-4 overflow-x-auto pb-6 mb-16 scrollbar-hide -mx-4 px-4">
          {/* First slot - Running picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-64 md:w-80 aspect-[4/5] bg-secondary rounded-xl overflow-hidden group"
          >
            <img 
              src={runningImg} 
              alt="Running" 
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" 
            />
          </motion.div>
          
          {/* Placeholder slots */}
          {[2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-shrink-0 w-64 md:w-80 aspect-[4/5] bg-secondary rounded-xl flex items-center justify-center group photo-card"
            >
              <div className="text-center">
                <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2 group-hover:text-primary transition-colors" />
                <p className="text-xs text-muted-foreground font-sans">Running Photo {i}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat Counters */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {runnerStats.map((stat) => {
            const count = useCounter(stat.value, 2000, isVisible);
            return (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                  {count}{stat.suffix}
                </div>
                <div className="text-xs text-muted-foreground mt-2 font-sans tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-1.5" />
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <p className="text-primary font-sans text-xs tracking-widest uppercase mb-1">{m.year}</p>
                <p className="text-foreground font-sans text-sm">{m.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300 hover:glow-navy"
            >
              <badge.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground">{badge.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center border border-border rounded-2xl p-8 md:p-12 bg-card/50 backdrop-blur-sm"
        >
          <p className="font-serif text-2xl md:text-4xl italic text-foreground">
            "Discipline beats motivation."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RunnersZone;
