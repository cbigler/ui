import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import DateRangePicker, { START_DATE_ACTIVE, END_DATE_ACTIVE, ANCHOR_RIGHT } from './index';

import moment from 'moment';

storiesOf('DateRangePicker', module)
  .addWithInfo('Open, start date selected', () => (
    <DateRangePicker
      onChange={action('dates change')}
      onFocusChange={action('focus')}
      focusedInput={START_DATE_ACTIVE}
      startDate={moment.utc()}
      endDate={moment.utc().subtract(1, 'day')}
    />
  ))
  .addWithInfo('Flaoted right', () => (
    <div style={{paddingLeft: 400, width: 400}}>
      <DateRangePicker
        anchor={ANCHOR_RIGHT}
        onChange={action('dates change')}
        onFocusChange={action('focus')}
        focusedInput={START_DATE_ACTIVE}
        startDate={moment.utc()}
        endDate={moment.utc().subtract(1, 'day')}
      />
    </div>
  ))
  .addWithInfo('Interactive', () => {
    class Wrapper extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          focus: null,
          startDate: moment.utc(),
          endDate: moment.utc().add(1, 'day'),
        };
      }
      render() {
        return <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={e => this.setState({startDate: e.startDate, endDate: e.endDate})}

          focusedInput={this.state.focus}
          onFocusChange={focus => this.setState({focus})}
        />;
      }
    }

    return <Wrapper />;
  })
  .addWithInfo('Interactive with ', () => {
    const commonRanges = [
      {
        name: "This week",
        startDate: moment.utc().subtract(1, 'week'),
        endDate: moment.utc()
      },
      {
        name: "Last week",
        startDate: moment.utc().subtract(2, 'week'),
        endDate: moment.utc().subtract(1, 'week')
      },
      {
        name: "This month",
        startDate: moment.utc().subtract(1, 'month'),
        endDate: moment.utc()
      },
      {
        name: "Last month",
        startDate: moment.utc().subtract(2, 'month'),
        endDate: moment.utc().subtract(1, 'month')
      },
      {
        name: "Next month",
        startDate: moment.utc().add(1, 'month'),
        endDate: moment.utc().add(2, 'month')
      }
    ]

    class Wrapper extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          focus: null,
          startDate: moment.utc(),
          endDate: moment.utc().add(1, 'day'),
        };
      }
      render() {
        return <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={e => this.setState({ startDate: e.startDate, endDate: e.endDate })}
          focusedInput={this.state.focus}
          onFocusChange={focus => this.setState({ focus }) }
          commonRanges={commonRanges}
          onSelectCommonRange={commonRange => {
            this.setState({
              startDate: commonRange.startDate,
              endDate: commonRange.endDate
            })
          }}
        />;
      }
    }

    return <Wrapper />;
  })
