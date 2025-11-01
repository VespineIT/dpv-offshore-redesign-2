"use client";

import { motion } from 'framer-motion';
import React, { ComponentProps } from 'react';

export type AnimatedSectionProps = ComponentProps<typeof motion.section>;

const AnimatedSection = ({ children, className, ...rest }: AnimatedSectionProps) => {
  return (
    <motion.section
      className={className}
      {...rest}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the element is in view
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;