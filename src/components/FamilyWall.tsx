import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart, Camera } from "lucide-react";
import childhoodImg from "@/assets/childhood.jpg";
import friendsImg from "@/assets/friends.jpg";
import momdadImg from "@/assets/momdad.jpg";
import friends2Img from "@/assets/friends2.jpeg";
import famImg from "@/assets/fam.jpeg";
import familyImg from "@/assets/family.jpeg";

const FamilyWall = () => {
  const { ref, isVisible } = useScrollReveal();

  // Masonry-style varied heights with actual images
  const photos = [
    { span: "row-span-2", src: childhoodImg, alt: "Childhood" },
    { span: "", src: friendsImg, alt: "Friends" },
    { span: "", src: momdadImg, alt: "Mom & Dad" },
    { span: "row-span-2", src: friends2Img, alt: "More Friends" },
    { span: "", src: famImg, alt: "Family" },
    { span: "", src: familyImg, alt: "Family Love" },
  ];

  return (
    <section id="family" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">👨‍👩‍👧‍👦 Family & Friends</p>
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-4">
            His Greatest <span className="text-gradient-navy">Achievement</span>
          </h2>
        </motion.div>

        {/* Masonry Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4 mb-12">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`${photo.span} bg-secondary rounded-xl overflow-hidden group photo-card hover:glow-navy transition-all duration-500`}
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 text-primary">
            <Heart className="w-4 h-4" />
            <p className="font-serif italic text-lg text-foreground">
              "Businesses grow. Miles pass. But <span className="text-gradient-navy">family stays.</span>"
            </p>
            <Heart className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyWall;
