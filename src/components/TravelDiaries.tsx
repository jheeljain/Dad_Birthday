import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useImageDimensions } from "@/hooks/useImageDimensions";

import canadaImg from "@/assets/travel/canada.jpeg";
import parisImg from "@/assets/travel/paris.jpeg";
import switzerlandImg from "@/assets/travel/switzerland.jpeg";
import italyImg from "@/assets/travel/italy.jpeg";
import germanyImg from "@/assets/travel/germany.jpeg";
import austriaImg from "@/assets/travel/austria.jpg";
import egyptImg from "@/assets/travel/egypt.jpeg";
import malaysiaImg from "@/assets/travel/malaysia.jpeg";
import singaporeImg from "@/assets/travel/singapore.jpeg";
import bangkokImg from "@/assets/travel/bangkok.jpeg";
import dubaiImg from "@/assets/travel/dubai.jpeg";
import australiaImg from "@/assets/travel/australia.jpg";
import baliImg from "@/assets/travel/bali.jpg";
import seychellesImg from "@/assets/travel/seychelles.jpeg";
import maldivesImg from "@/assets/travel/maldives.jpeg";
import spainImg from "@/assets/travel/spain.jpg";

const destinations = [
  { name: "Canada", caption: "Where every trail leads to a new perspective.", image: canadaImg },
  { name: "Paris", caption: "City of lights and endless charm.", image: parisImg },
  { name: "Switzerland", caption: "Peaks as high as his ambitions.", image: switzerlandImg },
  { name: "Italy", caption: "La dolce vita, Tarun Jain style.", image: italyImg },
  { name: "Germany", caption: "Precision meets passion.", image: germanyImg },
  { name: "Austria", caption: "Where classical elegance feels like home.", image: austriaImg },
  { name: "Egypt", caption: "Walking among the pharaohs.", image: egyptImg },
  { name: "Malaysia", caption: "Discovering the extraordinary in diversity.", image: malaysiaImg },
  { name: "Singapore", caption: "The lion city bowed.", image: singaporeImg },
  { name: "Bangkok", caption: "Energy that matches his own.", image: bangkokImg },
  { name: "Dubai / UAE", caption: "Where dreams are built to scale.", image: dubaiImg },
  { name: "Australia", caption: "From outback to outlook — always exploring.", image: australiaImg },
  { name: "Bali", caption: "Even paradise needed a visit from him.", image: baliImg },
  { name: "Seychelles", caption: "Ocean, calm, and clarity.", image: seychellesImg },
  { name: "Maldives", caption: "Blue waters, golden moments.", image: maldivesImg },
  { name: "Spain", caption: "¡Olé! Life is a fiesta.", image: spainImg },
];

const DestinationCard = ({ name, caption, image, index }: { name: string; caption: string; image: string; index: number }) => {
  const { dimensions, loading } = useImageDimensions(image);
  
  // Calculate aspect ratio from actual dimensions
  const aspectRatio = dimensions ? dimensions.width / dimensions.height : 16/7;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index % 2 === 0 ? 0 : 0.1, duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ aspectRatio: aspectRatio }}
    >
      <img
        src={image}
        alt={name}
        className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 ${loading ? 'opacity-0' : 'opacity-100'}`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground font-sans">{caption}</p>
      </div>
    </motion.div>
  );
};

const TravelDiaries = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="travel" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-7xl font-serif font-bold mb-4">
            Passport of a Legend
          </h2>
          <p className="text-muted-foreground font-sans text-lg">
            Some collect stamps. He collects perspectives.
          </p>
        </motion.div>

        <div className="space-y-6">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.name} {...dest} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-serif italic text-lg mt-16"
        >
          "The world isn't done with him yet."
        </motion.p>
      </div>
    </section>
  );
};

export default TravelDiaries;
