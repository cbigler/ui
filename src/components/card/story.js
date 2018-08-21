import React from 'react';
import { storiesOf } from '@storybook/react';

import Card, {CardBody, CardHeader, CardLoading, CardWell, CardWellHighlight, CardTable} from './index';
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
  .addWithInfo('Dark Card Well (no header)', () => (
    <div>
      <Card style={{width: 300}}>
        <CardWell type="dark">
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
        <CardWell type="dark">
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
        <CardWell type="dark">
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
  .addWithInfo('Card Table', () => (
    <Card style={{width: 500}}>
      <CardHeader>Example Card with Table</CardHeader>
      <CardTable
        headings={['Foo', 'Bar']}
        mapDataItemToRow={item => item.contents}
        data={[
          {id: 0, contents: [1, 2]},
          {id: 1, contents: ['foo', 'bar']},
        ]}
      />
    </Card>
  ))
  .addWithInfo('Scrolling Card Table', () => (
    <Card style={{width: 500}}>
      <CardHeader>Example Card with Table</CardHeader>
      <CardTable
        headings={['Timestamp', 'Local Time', 'Event', 'Current Count', 'Count Change', 'Doorway Name', 'Doorway ID']}
        mapDataItemToRow={item => item.contents}
        data={[
          {id: 0, contents: ['2018-08-21T13:40:24.376Z', '2018-08-21T09:40:24.376-0400', 'Exit', 42, -1, 'Office Doorway', 'drw_546312900847862380']},
          {id: 1, contents: ['2018-08-21T13:40:24.376Z', '2018-08-21T09:40:24.376-0400', 'Exit', 42, -1, 'Office Doorway', 'drw_546312900847862380']},
          {id: 2, contents: ['2018-08-21T13:40:24.376Z', '2018-08-21T09:40:24.376-0400', 'Exit', 42, -1, 'Office Doorway', 'drw_546312900847862380']},
          {id: 3, contents: ['2018-08-21T13:40:24.376Z', '2018-08-21T09:40:24.376-0400', 'Exit', 42, -1, 'Office Doorway', 'drw_546312900847862380']},
          {id: 4, contents: ['2018-08-21T13:40:24.376Z', '2018-08-21T09:40:24.376-0400', 'Exit', 42, -1, 'Office Doorway', 'drw_546312900847862380']},
          {id: 5, contents: ['2018-08-21T13:40:24.376Z', '2018-08-21T09:40:24.376-0400', 'Exit', 42, -1, 'Office Doorway', 'drw_546312900847862380']},
          {id: 6, contents: ['2018-08-21T13:40:24.376Z', '2018-08-21T09:40:24.376-0400', 'Exit', 42, -1, 'Office Doorway', 'drw_546312900847862380']},
          {id: 7, contents: ['2018-08-21T13:40:24.376Z', '2018-08-21T09:40:24.376-0400', 'Exit', 42, -1, 'Office Doorway', 'drw_546312900847862380']},
        ]}
      />
    </Card>
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
  .addWithInfo('Indeterminate Loading Card w/ Dark Card Well', () => (
    <Card>
      <CardLoading indeterminate />
      <CardWell type="dark">
        On average, peak utilization of <CardWellHighlight>18%</CardWellHighlight> happens
        around <CardWellHighlight>5:15p</CardWellHighlight> during <CardWellHighlight>open hours</CardWellHighlight>
      </CardWell>
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
