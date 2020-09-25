import React from 'react';
import { motion } from 'framer-motion';

export const DotLoader = ({ dotSize }) => {
  const loadingContainer = {
    lineHeight: 1,
    height: '1em',
    width: '50px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const loadingCircle = {
    display: 'block',
    width: dotSize,
    height: dotSize,
    backgroundColor: 'currentColor',
    borderRadius: '0.25rem',
  };

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: '50%',
    },
    end: {
      y: '150%',
    },
  };

  const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: 'easeInOut',
  };

  return (
    <motion.div style={loadingContainer} variants={loadingContainerVariants} initial="start" animate="end">
      <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
      <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
      <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
    </motion.div>
  );
};
