import { motion } from 'framer-motion';

export function Media({ src, alt, className = '', priority = false }) {
  return (
    <figure className={`media ${className}`}>
      <motion.div
        className="media-frame"
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} decoding="async" />
      </motion.div>
    </figure>
  );
}
