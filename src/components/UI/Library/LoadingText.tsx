// src/AnimatedText.js
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LoadingText = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { width: "50%" },
    visible: {
      width: 0,
      transition: {
        duration: 2.0,
        ease: [0.6, 0.05, -0.01, 1], // Custom cubic-bezier for smoother easing
      },
    },
  };

  return (
    <div ref={ref} className="relative inline-block overflow-hidden">
      <div className="relative text-transparent">{children}</div>{" "}
      {/* Ensure text is initially hidden */}
      <motion.div
        className="absolute bottom-0 left-0 top-0 z-10 bg-white"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{ width: "50%" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 top-0 z-10 bg-white"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{ width: "50%" }}
      />
      <div className="absolute inset-0">{children}</div>{" "}
      {/* Ensure text is visible after animation */}
    </div>
  );
};

function App() {
  return (
    <div className="py-3 text-center">
      <LoadingText>
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-white sm:text-7xl">
          Chennai House Price Prediction
        </h1>
      </LoadingText>
    </div>
  );
}

export default App;
