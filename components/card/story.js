import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Card, {CardBody, CardHeader, CardLoading} from './';
import IndicatorDot from '../indicator-dot';

import './styles.scss';

storiesOf('Card', module)
  .addWithInfo('Card', () => (
    <Card>
      <CardBody>
        <p>Hello World!</p>
      </CardBody>
    </Card>
  ))
  .addWithInfo('Card Header', () => (
    <Card>
      <CardHeader>Greeter</CardHeader>
      <CardBody>
        <p>Hello World!</p>
      </CardBody>
    </Card>
  ))
  .addWithInfo('Loading Card', () => (
    <Card>
      <CardLoading percent={50} />
      <CardBody>
        <p>Hello World!</p>
      </CardBody>
    </Card>
  ))
  .addWithInfo('Dark Card', () => (
    <Card type="dark">
      <CardBody>
        <p>Hello World!</p>
      </CardBody>
    </Card>
  ))
  .addWithInfo('Real example', () => {
    class RealExample extends React.Component {
      constructor(props) {
        super(props);
        this.state = {loaded: 0};

        setTimeout(() => {
          this.setState({loaded: 50});
        }, 1000);
        setTimeout(() => {
          this.setState({loaded: 100});
        }, 1500);
        setTimeout(() => {
          this.setState({loaded: 0});
        }, 2000);
      }
      render() {
        return <Card>
          <CardLoading percent={this.state.loaded} />
          <CardHeader>
            <div style={{display: 'flex'}}>
              <span style={{flex: 1}}>Greeter</span>
              <IndicatorDot style={{marginTop: 4}} type="success" label="Looks peachy" />
            </div>
            <div style={{display: 'flex', marginTop: 12, fontSize: 12, color: '#B4B8BF'}}>
              <span style={{flex: 1}}>Subtitle</span>
              <span>Type</span>
            </div>
          </CardHeader>
          <CardBody>
            <p>Hello World!</p>
          </CardBody>
        </Card>
      }
    }

    return <RealExample />;
  })
