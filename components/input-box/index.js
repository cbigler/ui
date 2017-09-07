import * as React from 'react';
import classnames from 'classnames';
import Select from 'react-select';

export default function InputBox(props) {
  switch (props.type) {
  // Selects need a custom class added to them so that they'll hide the caret and add some padding
  // to the right.
  case 'select':
    return <div className={classnames(
      'input-box',
      'input-box-select',
      props.disabled ? 'input-box-disabled' : null,
      props.className
    )}>
      <Select {...props} options={props.options} />
    </div>;
  case 'textarea':
    return <textarea
      {...props}
      className={classnames(
        'input-box',
        'input-box-textarea',
        props.className
      )}
    />;
  default:
    return <input
      {...props}
      className={classnames(
        'input-box',
        props.disabled ? 'input-box-disabled' : null,
        props.className
      )}
    />;
  }
}
