import { Button } from 'rebass';
import { motion } from 'framer-motion';
// Styles that every single button shares
export const globalButtonStyles = {
  display: 'inline-flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'auto',
  cursor: 'pointer',
  lineHeight: 1,
  textWrap: 'no-wrap',
  fontFamily: 'body',
  verticalAlign: 'middle',
  textAlign: 'center',
  letterSpacing: '.5px',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus:hover': {
    boxShadow: 'none',
  },
};

export const PrimaryButton = motion.custom<any>(Button);
export const SecondaryButton = motion.custom<any>(Button);
