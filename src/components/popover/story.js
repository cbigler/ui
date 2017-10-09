import React from 'react';
import { storiesOf } from '@storybook/react';

import './styles.scss';
import Popover from './index';
import Button from './index';
import Card, { CardBody, CardHeader } from '../card/index';

storiesOf('Popover', module)
  .addWithInfo('A popover', () => (
    <Popover show={true} popover={<Card><CardBody><p>Hello World! Lorem ipsum dolar set amet.</p></CardBody></Card>}>
      <button style={{width: 150, height: 10}} style={{opacity: 0, display: 'block'}}></button>
    </Popover>
  ))
  .addWithInfo('Popover that works', () => {
    class PopoverClick extends React.Component {
      constructor(props) {
        super(props);
        this.state = { show: false };
      }

      render() {
        return <Popover
          show={this.state.show}
          popover={<Card><CardBody><p>Hello World!</p></CardBody></Card>}
          onDismiss={() => this.setState({show: false})}
        >
          <button
            onClick={() => this.setState({show: !this.state.show})}
            style={{width: 200, height: 50}}
          >Foo</button>
        </Popover>;
      }
    }
    return <div>
      <div>
        <div>
          <PopoverClick />
        </div>
      </div>
      <div style={{background: 'red', width: 200, height: 200}} />
    </div>
  })
  .addWithInfo('Popover with ref target works', () => {
    class PopoverClick extends React.Component {
      constructor(props) {
        super(props);
        this.state = { show: false };
      }

      render() {
        return <div>
          <button
            style={{width: 200, height: 50}}
            onClick={() => this.setState({show: !this.state.show})}
          >Open Popover</button>
          <br/>
          <br/>
          <br/>
          <br/>
          <div
            ref={ref => this.myRef = ref}
          >Popover target</div>
          <Popover
            show={this.state.show}
            popover={<Card><CardBody><p>Hello World!</p></CardBody></Card>}
            target={this.myRef}
            onDismiss={() => this.setState({show: false})}
          />
        </div>
      }
    }
    return <PopoverClick />;
  })
  .addWithInfo('Wider popover with header that works', () => {
    class PopoverClick extends React.Component {
      constructor(props) {
        super(props);
        this.state = { show: false };
      }

      render() {
        return <Popover
          show={this.state.show}
          popover={<Card>
            <CardHeader>Foo</CardHeader>
            <CardBody>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </CardBody>
          </Card>}
          onDismiss={() => this.setState({show: false})}
        >
          <button
            onClick={() => this.setState({show: !this.state.show})}
            style={{width: 200, height: 50}}
          >Foo</button>
        </Popover>;
      }
    }
    return <PopoverClick />;
  })
