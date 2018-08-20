import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import DatePicker, { ANCHOR_LEFT, ANCHOR_RIGHT } from './index';
import { isInclusivelyBeforeDay } from '@density/react-dates';

import moment from 'moment';


storiesOf('DatePicker', module)
  .addWithInfo('Example usage', () => (
    <DatePicker
      date={moment.utc()}
      onChange={action('date')}
      focused={true}
      onFocusChange={action('focus change')}
      anchor={ANCHOR_LEFT}
    />
  ))
  .addWithInfo('Anchor to the right', () => (
    <div style={{paddingLeft: 300}}>
      <DatePicker
        date={moment.utc()}
        onChange={action('date')}
        focused={true}
        onFocusChange={action('focus change')}
        anchor={ANCHOR_RIGHT}
      />
    </div>
  ))
  .addWithInfo('Passes through other props to the underlying react-dates picker', () => (
    <DatePicker
      date={moment.utc()}
      onChange={action('date')}
      focused={true}
      onFocusChange={action('focus change')}

      // Other props
      numberOfMonths={2}
      isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
    />
  ))
  .addWithInfo('Interactive', () => {
    class Wrapper extends React.Component {
      constructor(props) {
        super(props);
        this.state = { focus: false, date: moment.utc() };
      }
      render() {
        return <DatePicker
          date={this.state.date}
          onChange={date => {
            action('date')(date);
            this.setState({date});
          }}
          focused={this.state.focus}
          onFocusChange={e => this.setState({focus: e.focused})}
        />;
      }
    }

    return <Wrapper />;
  })
