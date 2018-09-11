import React, { Fragment } from 'react';

export const customInput = props => {
  const { label, input, type, meta, name } = props;
  return (
    <Fragment>
      <label htmlFor={name}>
        {label}
        <input {...input} type={type} />
        {meta.error && meta.touched && !meta.active && <div>{meta.error}</div>}
      </label>
    </Fragment>
  );
};
