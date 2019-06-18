import React from 'react';
import PhoneInput from 'react-phone-number-input';

import './styles.scss';

export default function PhoneInputBox({
  value = undefined,
  onChange = () => null,
  country = 'US',
  ...props
}) {
  return <PhoneInput {...props} value={value} country={country} onChange={onChange} />;
}
