import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InputBox from '../input-box/index';

import './styles.scss';
import Floorplan, { DPU, CIRCLE } from './';

import uuid from 'uuid';

storiesOf('Floorplan', module)
  .addWithInfo('With a text body', () => {

    class FloorplanWrapper extends React.Component {
      constructor(props) {
        super(props);


        this.shapePopup = shape => <div style={{
          width: 509,
          height: 281,
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          justifyContents: 'center',
        }}>
          <h3>Popup</h3>
          <h5 style={{margin: 0, color: '#4E5457'}}>Has access to this data:</h5>
          <pre>{JSON.stringify(shape, null, 2)}</pre>
        </div>;

        this.state = {
          shapes: [
            {
              id: uuid.v4(),
              shape: CIRCLE,
              x: 300,
              y: 300,
              width: 40,
              height: 40,

              name: "Conference Room 1",
              popup: this.shapePopup,
            },
            {
              id: uuid.v4(),
              shape: CIRCLE,
              x: 646,
              y: 450,
              width: 40,
              height: 40,

              name: "Cafeteria 1",
              popup: this.shapePopup,
            },
          ],
        };
      }

      render() {
        return <div style={{width: '100vw', height: '100vh'}}>
          <Floorplan shapes={this.state.shapes} />
        </div>;
      }
    }

    return <FloorplanWrapper />;
  })
