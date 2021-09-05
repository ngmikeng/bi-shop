
import React from 'react';

import './custom-button.styles.scss';

interface ICustomButtonProps {
  [key: string]: any,
}

const CustomButton: React.FC<ICustomButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
