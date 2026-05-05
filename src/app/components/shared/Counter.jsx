import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Counter({ end }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    const isNumber = /^\d+$/.test(end);
    if (!isNumber) {
      return;
    }

    const target = parseInt(end);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end, hasAnimated]);

  return (
    <motion.div
      className="text-3xl font-bold text-blue-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasAnimated(true)}>
      
      {/^\d+$/.test(end) ? hasAnimated ? count : 0 : end}
      {/^\d+\+$/.test(end) && '+'}
    </motion.div>);

}