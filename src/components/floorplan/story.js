import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InputBox from '../input-box/index';

import './styles.scss';
import Floorplan, { DPU } from './';

import uuid from 'uuid';

storiesOf('Floorplan', module)
  .addWithInfo('With a text body', () => {

    class FloorplanWrapper extends React.Component {
      constructor(props) {
        super(props);


        this.shapePopup = shape => <div>
          <InputBox
            value={shape.name}
            style={{width: 'calc(100% - 16px)'}}
            onChange={e => this.setState({
              shapes: this.state.shapes.map(i => {
                if (i.id === shape.id) {
                  return Object.assign({}, shape, {name: e.target.value});
                } else {
                  return i;
                }
              }),
            })}
          />
        </div>;

        this.state = {
          shapes: [
            {
              id: uuid.v4(),
              shape: DPU,

              placement: 1,
              x: 350,
              y: 300,
              width: 40,
              height: 40,

              name: "DPU 1",
              popup: this.shapePopup,
            },
            {
              id: uuid.v4(),
              shape: DPU,

              placement: -1,
              x: 550,
              y: 400,
              width: 40,
              height: 40,

              name: "Random DPU in middle of room",
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
