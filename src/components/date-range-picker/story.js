import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import DateRangePicker, { START_DATE_ACTIVE, END_DATE_ACTIVE, ANCHOR_RIGHT } from './index';

import moment from 'moment';

// used in multiple stories
const commonRanges = [
  {
    name: "Week to date",
    startDate: moment.utc().startOf('week'),
    endDate: moment.utc()
  },
  {
    name: "Month to date",
    startDate: moment.utc().startOf('month'),
    endDate: moment.utc()
  },
  {
    name: "Quarter to date",
    startDate: moment.utc().startOf('quarter'),
    endDate: moment.utc()
  },
  {
    name: "Last week",
    startDate: moment.utc().startOf('week').subtract(1, 'week'),
    endDate: moment.utc().endOf('week').subtract(1, 'week')
  },
  {
    name: "Last month",
    startDate: moment.utc().startOf('month').subtract(1, 'month'),
    endDate: moment.utc().endOf('month').subtract(1, 'month')
  },
  {
    name: "Last Quarter",
    startDate: moment.utc().startOf('quarter').subtract(1, 'quarter'),
    endDate: moment.utc().endOf('quarter').subtract(1, 'quarter')
  },
  {
    name: "Last 7 days",
    startDate: moment.utc().subtract(1, 'week'),
    endDate: moment.utc()
  },
  {
    name: "Last 30 days",
    startDate: moment.utc().subtract(1, 'month'),
    endDate: moment.utc()
  },
  {
    name: "Last 90 days",
    startDate: moment.utc().subtract(1, 'quarter'),
    endDate: moment.utc()
  }
]

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
  .addWithInfo('With common date ranges', () => {

    return <DateRangePicker
      onChange={action('dates change')}
      onFocusChange={action('focus')}
      focusedInput={START_DATE_ACTIVE}
      startDate={moment.utc()}
      endDate={moment.utc().subtract(1, 'day')}
      commonRanges={commonRanges}
      onSelectCommonRange={action('common range selected')}
    />;
  })
  .addWithInfo('Floated right', () => (
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
  .addWithInfo('Floated right with common date ranges', () => {
    return <div style={{paddingLeft: 400, width: 400}}>
      <DateRangePicker
        anchor={ANCHOR_RIGHT}
        onChange={action('dates change')}
        onFocusChange={action('focus')}
        focusedInput={START_DATE_ACTIVE}
        startDate={moment.utc()}
        endDate={moment.utc().subtract(1, 'day')}
        commonRanges={commonRanges}
        onSelectCommonRange={action('common range selected')}
      />
    </div>
  })
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
  .addWithInfo('Interactive with common date ranges', () => {
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
          onOpenCommonRangeList={action('common range list opened')}
        />;
      }
    }

    return <Wrapper />;
  })
  .addWithInfo('Interactive with common date ranges and subtitles', () => {
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
          onFocusChange={focus => this.setState({ focus })}
          commonRanges={commonRanges}
          showCommonRangeSubtitles={true}
          onSelectCommonRange={commonRange => {
            this.setState({
              startDate: commonRange.startDate,
              endDate: commonRange.endDate
            })
          }}
          onOpenCommonRangeList={action('common range list opened')}
        />;
      }
    }

    return <Wrapper style={{width: '200px'}} />;
  })
