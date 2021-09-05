
import React from 'react';

import './custom-button.styles.scss';

interface ICustomButtonProps {
  [key: string]: any,
}

const CustomButton: React.FC<ICustomButtonProps> = (props) => {
  const { children, isGoogleSignIn, ...otherProps } = props;

  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
