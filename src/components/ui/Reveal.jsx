import { motion } from "framer-motion";

/**
 * Scroll-triggered reveal wrapper.
 * Fades + slides its children into view once, when scrolled to.
 */
const Reveal = ({
  children,
  delay = 0,
  y = 28,
  once = true,
  className = "",
  as = "div",
}) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
