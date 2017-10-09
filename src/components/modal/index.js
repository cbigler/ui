import * as React from 'react';
import classnames from 'classnames';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shouldCenterModal: true };

    this.resizedWindow = this.resizedWindow.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.resizedWindow);
  }
  resizedWindow() {
    console.log('RESIZE', this.modal, this.modal.clientHeight > document.body.clientHeight)
    this.setState({
      shouldCenterModal: this.modal ? this.modal.clientHeight > document.body.clientHeight : true,
    });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizedWindow);
  }
  render() {
    return <div
      className={classnames('modal-backdrop', {centered: this.state.shouldCenterModal})}
      onClick={this.props.onClickBackdrop}
    >
      <div
        className="modal"
        onClick={e => e.stopPropagation()}
        ref={ref => {
          if (ref) {
            console.log(ref);
            this.modal = ref;
          }
        }}
      >
        {this.props.onClose ? <div className="modal-close" onClick={this.props.onClose}>&#10005;</div> : null}
        {this.props.children}
      </div>
    </div>;
  }
}
