import * as React from 'react';
import classnames from 'classnames';

// By default, hide the percentage bar below screen widths of this width.
const PERCENTAGE_BAR_DEFAULT_BREAK_WIDTH = 768;

const MDASH = String.fromCharCode(8212);

export default class PercentageBar extends React.Component {
  componentDidMount() {
    this.updateDimensions = () => this.forceUpdate();
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  render() {
    let {
      percentage,
      percentageFormatter,
      breakWidth,
    } = this.props;

    breakWidth = breakWidth || PERCENTAGE_BAR_DEFAULT_BREAK_WIDTH;
    percentageFormatter = percentageFormatter || (n => `${(n * 100).toFixed(1)}%`);

    // Ensure that percentage never overflows the bar.
    if (percentage > 1) {
      percentage = 1;
    }

    const formattedPercentage = percentageFormatter(percentage);

    // Check if the percentage bar has enough screen width to render the bar or not.
    const isExpanded = document.body && document.body.clientWidth >= breakWidth;

    return <div className="percentage-bar-container">
      <div
        className="percentage-bar"
        style={{display: isExpanded ? 'inline-block' : 'none'}} /* Is the bar visible? */
      >
        <div className="percentage-bar-colored-section" style={{width: `${percentage * 100}%`}} />
      </div>
      <span
        className={classnames("percentage-bar-text", formattedPercentage === null ? 'disabled' : null)}

        // If the text is preceded by a bar (ie, isExpanded is true), then style it differently.
        style={{
          textAlign: isExpanded ? 'right' : 'left',
          width: isExpanded ? '56px' : '32px',
        }}
      >
        {formattedPercentage === null ? MDASH : formattedPercentage}
      </span>
    </div>;
  }
}
