import React from 'react';
import cx from 'classnames';

const getValidityClassName = meta => {
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return 'invalid';
  }
  if (meta.touched && meta.valid) {
    return 'valid';
  }
};

export const customInput = props => {
  const { label, input, type, meta, name } = props;
  return (
    <div
      className={cx(
        'custom-input-container',
        { 'flex-row-reverse': type === 'checkbox' },
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}
    >
      <label htmlFor={name}>
        {label}
        <input {...input} type={type} />
        {meta.error && meta.touched && !meta.active && <div>{meta.error}</div>}
      </label>
    </div>
  );
};
