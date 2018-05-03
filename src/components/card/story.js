import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Card, {CardBody, CardHeader, CardLoading, CardWell, CardWellHighlight} from './index';
import Button from '../button/index';
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
  .addWithInfo('Card Modal', () => (
    <Card type="modal">
      <CardHeader>Confirmation</CardHeader>
      <CardBody>
        <p style={{margin: 0}}>This token is for a thing. Lorem Ipsum is simply dummy text of the printing and typesetting industry and this is just here to make you believe in aliens.</p>
        <br />
        <Button>Yes</Button>
        <br />
        <Button>No</Button>
      </CardBody>
    </Card>
  ))
  .addWithInfo('Card Well', () => (
    <div>
      <Card style={{width: 300}}>
        <CardHeader>Confirmation</CardHeader>
        <CardWell>
          The distance from the
          earth to the moon is <CardWellHighlight>384,400 km</CardWellHighlight>.
        </CardWell>
        <CardBody>
          <p style={{margin: 0}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry and this is just here to make you believe in aliens.
          </p>
          <br />
          <Button>Yes</Button>
          <br />
          <Button>No</Button>
        </CardBody>
      </Card>
      <br/>
      <Card style={{width: 500}}>
        <CardHeader>Confirmation</CardHeader>
        <CardWell>
          The distance from the
          earth to the moon is <CardWellHighlight>384,400 km</CardWellHighlight>.
        </CardWell>
        <CardBody>
          <p style={{margin: 0}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry and this is just here to make you believe in aliens.
          </p>
          <br />
          <Button>Yes</Button>
          <br />
          <Button>No</Button>
        </CardBody>
      </Card>
      <br/>
      <Card style={{width: 700}}>
        <CardHeader>Confirmation</CardHeader>
        <CardWell>
          The distance from the
          earth to the moon is <CardWellHighlight>384,400 km</CardWellHighlight>.
        </CardWell>
        <CardBody>
          <p style={{margin: 0}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry and this is just here to make you believe in aliens.
          </p>
          <br />
          <Button>Yes</Button>
          <br />
          <Button>No</Button>
        </CardBody>
      </Card>
    </div>
  ))
  .addWithInfo('Card Well (no header)', () => (
    <div>
      <Card style={{width: 300}}>
        <CardWell>
          The distance from the
          earth to the moon is <CardWellHighlight>384,400 km</CardWellHighlight>.
        </CardWell>
        <CardBody>
          <p style={{margin: 0}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry and this is just here to make you believe in aliens.
          </p>
          <br />
          <Button>Yes</Button>
          <br />
          <Button>No</Button>
        </CardBody>
      </Card>
      <br/>
      <Card style={{width: 500}}>
        <CardWell>
          The distance from the
          earth to the moon is <CardWellHighlight>384,400 km</CardWellHighlight>.
        </CardWell>
        <CardBody>
          <p style={{margin: 0}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry and this is just here to make you believe in aliens.
          </p>
          <br />
          <Button>Yes</Button>
          <br />
          <Button>No</Button>
        </CardBody>
      </Card>
      <br/>
      <Card style={{width: 700}}>
        <CardWell>
          The distance from the
          earth to the moon is <CardWellHighlight>384,400 km</CardWellHighlight>.
        </CardWell>
        <CardBody>
          <p style={{margin: 0}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry and this is just here to make you believe in aliens.
          </p>
          <br />
          <Button>Yes</Button>
          <br />
          <Button>No</Button>
        </CardBody>
      </Card>
    </div>
  ))
  .addWithInfo('Responsive Card Well', () => (
    <div style={{resize: 'both', overflow: 'auto'}}>
      <span style={{fontFamily: 'Sailec'}}>Resize the card horizontally to see its responsive behavior!</span>
      <br/>
      <Card style={{resize: 'horizontal', overflow: 'auto'}}>
        <CardWell>
          On average, peak utilization of <CardWellHighlight>18%</CardWellHighlight> happens
          around <CardWellHighlight>5:15p</CardWellHighlight> during <CardWellHighlight>open hours</CardWellHighlight>
        </CardWell>
        <CardBody>
          <p style={{margin: 0}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry and this is just here to make you believe in aliens.
          </p>
          <br />
          <Button>Yes</Button>
          <br />
          <Button>No</Button>
        </CardBody>
      </Card>
    </div>
  ))
  .addWithInfo('Card Modal with long header', () => (
    <Card type="modal">
      <CardHeader><span class="card-title">Set Capacity: a really really really long title</span></CardHeader>
      <CardBody>
        <p style={{margin: 0}}>This token is for a thing. Lorem Ipsum is simply dummy text of the printing and typesetting industry and this is just here to make you believe in aliens.</p>
        <br />
        <Button>Yes</Button>
        <br />
        <Button>No</Button>
      </CardBody>
    </Card>
  ))
  .addWithInfo('Card Small Header', () => (
    <Card>
      <CardHeader sizez="small">Greeter</CardHeader>
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
  .addWithInfo('Indeterminate Loading Card', () => (
    <Card>
      <CardLoading indeterminate />
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
  .addWithInfo('Indeterminate loader - toggled render', () => {
    class IndeterminateLoaderToggleable extends React.Component {
      constructor(props) {
        super(props);
        this.state = {loading: false};

        // setTimeout(() => {
        //   this.setState({loading: true});
        // }, 1000);
      }
      render() {
        const loader = this.state.loading ? <CardLoading indeterminate /> : null;

        return <div>
          <Button
            onClick={()=> this.setState({loading: !this.state.loading})}
            style={{"margin-bottom": "15px"}}
          >Toggle loading</Button>

          <Card>
            {loader}
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
        </div>
      }
    }

    return <IndeterminateLoaderToggleable />;
  })
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
