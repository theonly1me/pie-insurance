import React from 'react';
import { AnchorButtonProps } from '../../../types';
import classes from './AnchorButton.module.css';

/**
 * Reusable AnchorButton Component
 */
const AnchorButton: React.FC<AnchorButtonProps> = ({
  buttonText,
  className,
  href = '#',
  onClick = () => {},
  type,
}) => {
  return (
    <a
      role="button"
      href={href}
      className={`${classes.btn} ${
        type === 'full' ? classes.btnFull : classes.btnOutline
      } ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </a>
  );
};

export default AnchorButton;
