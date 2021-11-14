import React from "react";
import Wave from "./wave";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero">
      <Wave />
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="hero__heading"
      >
        Sultan Parbes
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hero__sub-heading"
      >
        Front End Developer
      </motion.h2>
    </div>
  );
}

export default Hero;
