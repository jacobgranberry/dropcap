import React from 'react';
import { globalButtonStyles, PrimaryButton, SecondaryButton } from './styledButton';
import { DotLoader } from './dotLoader';

export interface IButton {
  variant: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  isLoading?: boolean;
  href?: string;
  type?: string;
  onClick?: () => void;
  as?: string;
  sx?: any;
}

export const Button: React.FC<IButton> = ({
  variant,
  children,
  href,
  size,
  isDisabled,
  isLoading,
  onClick,
  type,
  sx,
  ...props
}) => {
  const buttonHeight = size === 'large' ? '46px' : size === 'medium' ? '40px' : size === 'small' ? '36px' : undefined;
  const paddingY = size === 'large' ? 4 : size === 'medium' ? 2 : size === 'small' ? 2 : undefined;
  const paddingX = size === 'large' ? 8 : size === 'medium' ? 6 : size === 'small' ? 6 : undefined;
  const fontSize = size === 'large' ? 4 : size === 'medium' ? 3 : size === 'small' ? 3 : undefined;
  const dotSize = size === 'large' ? '8px' : size === 'medium' ? '6px' : size === 'small' ? '6px' : undefined;

  const initialAnimation = {
    transform: 'translate3d(0px, 0px, 0px)',
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
  };

  const hoverAnimation = {
    transform: isDisabled || isLoading ? initialAnimation.transform : 'translate3d(0px, -2px, 0px)',
    boxShadow: isDisabled || isLoading ? initialAnimation.boxShadow : '0px 2px 6px 0px rgba(0, 0, 0, 0.2)',
  };

  const focusAnimation = {
    transform: isDisabled || isLoading ? initialAnimation.transform : initialAnimation.transform,
    boxShadow: isDisabled || isLoading ? initialAnimation.boxShadow : initialAnimation.boxShadow,
  };

  const sharedProps = {
    as: href ? 'a' : 'button',
    className: `button__${variant}`,
    href,
    onClick: isLoading || isDisabled ? undefined : onClick,
    isDisabled,
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
            minHeight: buttonHeight || '46px',
            minWidth: '136px',
            ...sx,
          }}
          {...sharedProps}
          {...props}
        >
          {isLoading ? <DotLoader dotSize={dotSize || '8px'} /> : <span>{children}</span>}
        </PrimaryButton>
      );
    case 'secondary':
      return (
        <SecondaryButton
          variant="secondary"
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
            ...sx,
          }}
          {...sharedProps}
          {...props}
        >
          {isLoading ? <DotLoader dotSize={dotSize || '8px'} /> : <span>{children}</span>}
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
  }
};
