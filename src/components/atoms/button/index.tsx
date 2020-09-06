import React from 'react';
import { globalButtonStyles, PrimaryButton, SecondaryButton } from './styledButton';
import { DotLoader } from './dotLoader';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode | string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  type?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  href,
  size,
  disabled,
  loading,
  onClick,
  type,
  ...props
}) => {
  const buttonHeight = size === 'tall' ? '56px' : size === 'normal' ? '40px' : size === 'short' ? '36px' : undefined;
  const paddingY = size === 'tall' ? 4 : size === 'normal' ? 2 : size === 'short' ? 2 : undefined;
  const paddingX = size === 'tall' ? 8 : size === 'normal' ? 6 : size === 'short' ? 6 : undefined;
  const fontSize = size === 'tall' ? 4 : size === 'normal' ? 3 : size === 'short' ? 3 : undefined;
  const dotSize = size === 'tall' ? '8px' : size === 'normal' ? '6px' : size === 'short' ? '6px' : undefined;

  const initialAnimation = {
    transform: 'translate3d(0px, 0px, 0px)',
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
  };

  const hoverAnimation = {
    transform: disabled || loading ? initialAnimation.transform : 'translate3d(0px, -2px, 0px)',
    boxShadow: disabled || loading ? initialAnimation.boxShadow : '0px 2px 6px 0px rgba(0, 0, 0, 0.2)',
  };

  const focusAnimation = {
    transform: disabled || loading ? initialAnimation.transform : initialAnimation.transform,
    boxShadow: disabled || loading ? initialAnimation.boxShadow : initialAnimation.boxShadow,
  };

  const sharedProps = {
    as: href ? 'a' : 'button',
    className: `button__${variant}`,
    href,
    onClick: loading || disabled ? undefined : onClick,
    disabled,
    type,
  };

  switch (variant) {
    case 'primary':
      return (
        <PrimaryButton
          variant="primary"
          initial={initialAnimation}
          whileHover={hoverAnimation}
          whileTap={focusAnimation}
          sx={{
            ...globalButtonStyles,
            fontSize: fontSize || 4,
            paddingY: paddingY || 4,
            paddingX: paddingX || 8,
            minHeight: buttonHeight || '56px',
            minWidth: '136px',
          }}
          {...sharedProps}
          {...props}
        >
          {loading ? <DotLoader dotSize={dotSize || '8px'} /> : <span>{children}</span>}
        </PrimaryButton>
      );
    case 'secondary':
      return (
        <SecondaryButton
          variant="outline_primary"
          initial={initialAnimation}
          whileHover={hoverAnimation}
          whileTap={focusAnimation}
          sx={{
            ...globalButtonStyles,
            borderWidth: '2px',
            borderStyle: 'solid',
            fontSize: fontSize || 4,
            paddingY: paddingY || 4,
            paddingX: paddingX || 8,
            minHeight: buttonHeight || '40px',
            minWidth: '136px',
          }}
          {...sharedProps}
          {...props}
        >
          {loading ? <DotLoader dotSize={dotSize || '8px'} /> : <span>{children}</span>}
        </SecondaryButton>
      );

    // case 'text':
    //   return (
    //     <Text
    //       as="button"
    //       sx={{
    //         ...globalButtonStyles,
    //         background: 'transparent',
    //         border: 0,
    //         padding: 2,
    //         textTransform: 'none',
    //         textDecoration: 'none',
    //       }}
    //       {...sharedProps}
    //       {...props}
    //     >
    //       <span>{children}</span>
    //     </Text>
    //   );
    default:
      return (
        <button type="button" className={`button__${variant}`}>
          needs variant
        </button>
      );
  }
};
