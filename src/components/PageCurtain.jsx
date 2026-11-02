import { motion } from 'framer-motion';

export function PageCurtain() {
  return (
    <motion.div
      className="page-curtain"
      aria-hidden="true"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
    />
  );
}
