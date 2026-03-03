import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, BookOpen, Dumbbell, Briefcase, Target, Check } from "lucide-react";

const categories = [
  {
    icon: Globe,
    title: "Countries to Visit",
    items: ["Japan", "Norway", "New Zealand", "Ireland", "Russia", "Israel","Malta"],
  },
  {
    icon: BookOpen,
    title: "Skills to Learn",
    items: ["Surfing", "Meditation mastery"],
  },
  {
    icon: Dumbbell,
    title: "Fitness Goals",
    items: ["75-Day Hard Challenge", "Mountain climbing"],
  },
  {
    icon: Target,
    title: "51 Things After 51",
    items: ["Bungee Jumping", "Sunrise at every continent", "Tomorrowland", "Skydiving without Instructor", "Kailash Mansarovar", "Mount Everest Base Camp"],
  },
];

const BucketList = () => {
  const { ref, isVisible } = useScrollReveal();
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (item: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(item) ? next.delete(item) : next.add(item);
      return next;
    });
  };

  const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);
  const progress = (checked.size / totalItems) * 100;

  return (
    <section id="bucketlist" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">🚀 Bucket List 2.0</p>
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-4">
            The Next <span className="text-gradient-navy">Chapter</span>
          </h2>
          <p className="text-muted-foreground font-sans">
            51 isn't the peak. It's the launchpad.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex justify-between text-xs font-sans text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{checked.size}/{totalItems} unlocked</span>
          </div>
          <div className="h-2 bg-card rounded-full overflow-hidden border border-border">
            <motion.div
              className="h-full bg-gradient-navy rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <cat.icon className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-sm font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-2">
                {cat.items.map((item) => {
                  const isChecked = checked.has(item);
                  return (
                    <button
                      key={item}
                      onClick={() => toggle(item)}
                      className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-all duration-300 ${
                        isChecked
                          ? "bg-primary/10 border border-primary/30"
                          : "bg-secondary/30 border border-transparent hover:border-border"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                          isChecked ? "bg-primary border-primary" : "border-muted-foreground"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 text-primary-foreground" />}
                      </div>
                      <span
                        className={`text-sm font-sans transition-all ${
                          isChecked ? "text-primary line-through" : "text-foreground"
                        }`}
                      >
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BucketList;
