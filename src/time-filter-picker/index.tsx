import React, { useState } from 'react';

import moment from 'moment-timezone';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';

import colorVariables from '../../variables/colors.json';
import InputBox from '../input-box';
import DayOfWeekSelector from '../day-of-week-picker';

function TimePickerInput({value, onChange, disabled, error}) {
  return <InputBox width={108} value={value} onChange={onChange} disabled={disabled} invalid={error ? 'true' : undefined} />;
}

function TimePicker({value, onChange}) {
  return <KeyboardTimePicker
    mask="__:__ _M"
    placeholder="08:00 AM"
    value={value}
    onChange={onChange}
    TextFieldComponent={TimePickerInput} />;
}

function TimeFilterDisplay({displayTwoDays, shadedStartPercent, shadedEndPercent, color=colorVariables.blue}) {
  return <div style={{display: 'flex', position: 'relative', flex: 1}}>
    <div style={{width: '100%', height: 5, backgroundColor: colorVariables.gray300}}></div>
    <div style={{
      position: 'absolute',
      top: 0,
      height: 5,
      left: `${shadedStartPercent}%`,
      width: `${shadedEndPercent}%`,
      backgroundColor: color
    }}></div>
    <div style={{marginTop: 8}}>
      {(displayTwoDays ? [0,4,8,12,16,20,24] : [0,2,4,6,8,10,12,14,16,18,20,22,24]).map(hours => (
        <div key={hours} style={{
          position: 'absolute',
          left: `${hours * 100 / 24}%`,
          transform: 'translateX(-50%)'
        }}>{moment().startOf('day').add(hours, 'hours').format('ha').slice(0, -1)}</div>
      ))}
    </div>
  </div>
}

function TimeFilterPicker() {
  const [startTimePickerValue, setStartTimePickerValue] = useState(moment('08:00', 'hh:mm'));
  const [endTimePickerValue, setEndTimePickerValue] = useState(moment('17:00', 'hh:mm'));
  const [daysOfWeek, setDaysOfWeek] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);

  let displayTwoDays = false;
  let endTimeNormalized = endTimePickerValue && endTimePickerValue.clone();
  while (endTimeNormalized && endTimeNormalized.diff(startTimePickerValue, 'days') > 0) {
    endTimeNormalized.subtract(1, 'day');
  }
  if (endTimeNormalized.diff(startTimePickerValue) <= 0 && endTimeNormalized !== endTimeNormalized.clone().startOf('day')) {
    endTimeNormalized.add(1, 'day');
    displayTwoDays = true;
  }

  // Calculate
  const startOfDay = startTimePickerValue.clone().startOf('day');
  const shadedStartPercent = startTimePickerValue ? 
    startTimePickerValue.diff(startOfDay, 'minutes') * 100 / 1440 : 0;
  const shadedEndPercent = (startTimePickerValue && endTimeNormalized) ? 
    displayTwoDays ? 
      endTimeNormalized.diff(endTimeNormalized.clone().startOf('day'), 'minutes') * 100 / 1440 :
      endTimeNormalized.diff(startTimePickerValue, 'minutes') * 100 / 1440 : 0;

  return <MuiPickersUtilsProvider utils={MomentUtils}>
    <div style={{padding: 24}}>
      <div style={{display: 'flex'}}>
        <TimePicker value={startTimePickerValue} onChange={setStartTimePickerValue} />
        <div style={{lineHeight: '40px', padding: '0px 8px'}}>to</div>
        <TimePicker value={endTimeNormalized} onChange={setEndTimePickerValue} />
        <div style={{flex:1}}></div>
        <div style={{height: 40, display: 'flex', alignItems: 'center'}}>
          <DayOfWeekSelector daysOfWeek={daysOfWeek} onChange={setDaysOfWeek} />
        </div>
      </div>
      <div style={{
        width: 'calc(100% + 48px)',
        height: 1,
        backgroundColor: colorVariables.gray300,
        margin: '16px -24px'
      }}></div>
      <div style={{display: 'flex'}}>
        <TimeFilterDisplay
          displayTwoDays={displayTwoDays}
          shadedStartPercent={shadedStartPercent}
          shadedEndPercent={displayTwoDays ? 100 : shadedEndPercent} />
        {displayTwoDays ? <TimeFilterDisplay
          displayTwoDays={displayTwoDays}
          shadedStartPercent={0}
          shadedEndPercent={shadedEndPercent}
          color={colorVariables.yellow} /> : null}
      </div>
    </div>
  </MuiPickersUtilsProvider>;
}

export default TimeFilterPicker;
