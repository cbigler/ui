import * as uuid from 'uuid';
import React, { Component } from 'react';
import classnames from 'classnames';
import { IconArrowRight } from '@density/ui-icons';

export default function Card({type, style, className, children}) {
  return <div
    className={classnames('card', type ? `card-${type}` : null, className)}
    style={style}
  >{children}</div>;
}

export function CardBody({children, className}) {
  return <div className={classnames('card-body', className)}>{children}</div>;
}

export function CardHeader({children, size, className, onClick}) {
  return <div
      className={classnames('card-header', `card-header-${size || 'base'}`, className)}
      onClick={onClick}
    >{children}</div>;
}

export function CardWell({children, type, className}) {
  return <div className={classnames('card-well', `card-well-${type}`, className)}>{children}</div>;
}
export function CardWellHighlight({children, className}) {
  return <span className={classnames('card-well-highlight', className)}>
    {children}
  </span>;
}

export function CardLoading({indeterminate, percent, className}) {
  return <div className="card-loading-wrapper">
    <div className={classnames(
      'card-loading',
      indeterminate ? `card-loading-indeterminate` : null,
      className
    )} style={{width: `${percent}%`}} />
  </div>
}

export class CardTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showArrow: false,
    };

    this.onScroll = this.onScroll.bind(this);
  }

  onScroll() {
    const container = this.container.getBoundingClientRect();
    const table = this.table.getBoundingClientRect();

    let showArrow = table.width > container.width && table.x >= container.x;

    if (showArrow !== this.state.showArrow) {
      this.setState({showArrow});
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.onScroll);
    this.container.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onScroll);
    this.container.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const { headings, data, mapDataItemToRow } = this.props;
    return (
      <div className="card-table">
        <div className="card-table-scroll" ref={r => { this.container = r; }}>
          <div
            className={classnames('card-table-arrow', {visible: this.state.showArrow})}
            onClick={() => {
              this.container.focus();

              // Animate the scroll position a bit to the left to indicate that the table can be
              // scrolled horizontally.
              for (let frame = 0; frame < 100; frame++) {
                window.setTimeout(() => {
                  this.container.scrollLeft = Math.sqrt(frame * 100);
                }, frame * 2);
              }
            }}
          >
            <IconArrowRight width={16} height={16} color="white" />
          </div>
          <table ref={r => { this.table = r; }}>
            <thead>
              <tr>
                {headings.map(heading => <th key={heading}><span>{heading}</span></th>)}
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.id}>
                  {mapDataItemToRow(row).map(item => <td key={item}>{item}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
