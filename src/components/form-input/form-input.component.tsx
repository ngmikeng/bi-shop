import React from 'react';

import './form-input.styles.scss';

interface IFormInputProps {
  label: string,
  value: string,
  [key: string]: any,
  onChange: (event: React.FormEvent<HTMLInputElement>) => void,
}

const FormInput: React.FC<IFormInputProps> = (props) => {
  const { onChange, label, ...otherProps } = props;

  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...otherProps} />
      {label ? (
        <label
          className={`${otherProps.value.length ? "shrink" : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default FormInput;
