import React, { useState } from 'react';

import moment from 'moment-timezone';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';

import InputBox from '../input-box';

function TimePickerInput({value, onChange, disabled, error}) {
  return <InputBox width={108} value={value} onChange={onChange} disabled={disabled} invalid={error} />;
}

function TimePicker({value, onChange}) {
  return <KeyboardTimePicker
    mask="__:__ _M"
    placeholder="08:00 AM"
    value={value}
    onChange={onChange}
    TextFieldComponent={TimePickerInput} />;
}

function TimeFilterPicker() {
  const [startTimePickerValue, setStartTimePickerValue] = useState(moment('08:00', 'hh:mm'));
  const [endTimePickerValue, setEndTimePickerValue] = useState(moment('17:00', 'hh:mm'));
  return <MuiPickersUtilsProvider utils={MomentUtils}>
    <div style={{width: '100%'}}>
      <div style={{display: 'flex'}}>
        <TimePicker value={startTimePickerValue} onChange={setStartTimePickerValue} />
        <TimePicker value={endTimePickerValue} onChange={setEndTimePickerValue} />
      </div>
    </div>
  </MuiPickersUtilsProvider>;
}

export default TimeFilterPicker;
