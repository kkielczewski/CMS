import React from 'react';

const Checkbox = ({
  input,
  meta,
  id,
  label = '',
  extraClasses = ''
}) => (
  <div>
    <input {...input} type="checkbox" id={id} className={`branded-checkbox ${extraClasses && extraClasses}`} />
    <label className="field-label" htmlFor={id}>{label}</label>
    {meta.touched && meta.error && <div className="alert alert-card alert-error">{meta.error}</div>}
  </div>
);

export default Checkbox;
