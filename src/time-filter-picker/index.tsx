import React, { useState } from 'react';

import moment from 'moment-timezone';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';

function TimeFilterPicker() {
  const [timePickerValue, setTimePickerValue] = useState(moment());
  return <MuiPickersUtilsProvider utils={MomentUtils}>
    <div style={{width: '100%'}}>
      <KeyboardTimePicker
        placeholder="08:00 AM"
        mask="__:__ _M"
        value={timePickerValue}
        onChange={setTimePickerValue} />
    </div>
  </MuiPickersUtilsProvider>;
}

export default TimeFilterPicker;
