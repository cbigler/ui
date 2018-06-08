import React, { Component } from 'react';
import { applyToPoint } from 'transformation-matrix';

import {ReactSVGPanZoom, TOOL_NONE, TOOL_AUTO} from 'react-svg-pan-zoom';

export const DPU = ({selected, shape}) => <g className="DPU" transform="scale(0.75)">
  <rect
    x={shape.placement === 1 ? -10 : 50}
    y={15}
    width={10}
    height={20}
    fill="#CBCFD6"
    stroke="#B4B8BF"
    strokeWidth={2}
  />
  <rect
    x={0}
    y={0}
    width={50}
    height={50}
    rx={8}
    ry={8}
    fill="#CBCFD6"
    stroke={selected ? '#4198FF' : '#8E9299'}
    strokeWidth={2}
  />
  <path
    d="M3.76898293,9.63518314 C4.62950636,9.11441313 5.35090153,8.38571029 5.86367624,7.51833746 C6.40105377,6.60969552 6.70938043,5.54910822 6.70938043,4.41608352 L6.70938043,0.384553084 C6.70938043,0.172147028 6.88102471,0 7.09266657,0 L8.90723296,0 C9.1190187,0 9.2905191,0.172147028 9.2905191,0.384553084 L9.2905191,4.41608352 C9.2905191,5.54896392 9.59898963,6.60969552 10.1362233,7.51833746 C10.6491419,8.38571029 11.3703932,9.11441313 12.2310605,9.63518314 L15.808254,11.7065751 C15.9916961,11.8127781 16.0544261,12.0478389 15.9485332,12.231674 L15.0413939,13.8076923 C14.935501,13.9916718 14.7011267,14.0545855 14.5176846,13.9483825 L11.0030773,11.9133535 C10.1173755,11.4070133 9.0924016,11.1176966 7.99994977,11.1176966 C6.9076418,11.1176966 5.88252402,11.4070133 4.99682225,11.9133535 L1.4823588,13.9483825 C1.29891667,14.0545855 1.06454237,13.9916718 0.958649499,13.8076923 L0.0513663054,12.231674 C-0.0543826872,12.0478389 0.00834732743,11.8127781 0.191789457,11.7065751 L3.76898293,9.63518314 Z"
    fill="#8E9299"
    transform="translate(17,17)"
  ></path>
</g>;

export default class Floorplan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      panZoomMatrix: {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0},
    };
  }
  componentWillMount() {
    this.onResize = () => this.forceUpdate();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    let bbox, width = 500, height = 500;
    if (this.container) {
      bbox = this.container.getBoundingClientRect();
      width = bbox.width;
      height = bbox.height;
    }

    const { shapes, onClick } = this.props;
    const { selectedId } = this.state;

    // Given the selected id, get a reference to the selected shape.
    const selectedShape = selectedId ? shapes.find(i => i.id === selectedId) : null;

    // Also, store a reference to the last shape to be selected. This is used so that popups and
    // other things that fade out after the shape is deselected can stay positioned next to the
    // selected shape.
    this.lastSelectedShape = selectedShape || this.lastSelectedShape;

    return <div className="floorplan" ref={r => {
      const firstUpdate = typeof this.container === 'undefined';
      this.container = r;
      if (firstUpdate) {
        this.forceUpdate();
      }
    }}>

      {(() => {
        let styles = {};

        if (this.lastSelectedShape) {
          const point = applyToPoint(this.state.panZoomMatrix, {
            x: this.lastSelectedShape.x - (this.lastSelectedShape.width/2) - 3,
            y: this.lastSelectedShape.y + (this.lastSelectedShape.height/2),
          });

          styles.top = point.y + 10;
          styles.left = point.x;
        }

        styles.opacity = selectedShape ? 1 : 0;
        styles.pointerEvents = selectedShape ? 'all' : 'none';

        return <div className="floorplan-popup" style={styles}>
          {selectedShape ? selectedShape.popup(selectedShape) : null}
        </div>;
      })()}

      <ReactSVGPanZoom
        width={width}
        height={height}
        ref={r => { this.panZoom = r; }}

        /* When a shape is selected, do not allow the canvas to move */
        tool={selectedId ? TOOL_NONE : TOOL_AUTO}

        /* https://github.com/chrvadala/react-svg-pan-zoom/blob/master/docs/documentation.md */
        detectWheel={true}
        detectPinchGesture={true}
        detectAutoPan={false}
        disableDoubleClickZoomWithToolAuto={false}

        toolbarPosition="none"
        miniaturePosition="none"
        background="#B4B8BF"

        onChangeValue={value => this.setState({panZoomMatrix: value})}
        onZoom={() => this.setState({selectedId: null})}
      >
        <svg
          className="floorplan-svg"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
        >
          <g className="floorplan-layer-image">
            <image
              xlinkHref="https://hackathon-floorplan-generator.surge.sh/floorplan_3000.jpg"
              x={0}
              y={0}
              onClick={() => this.setState({selectedId: null})}
            />
          </g>

          <g className="floorplan-layer-shapes">
            {shapes.map(shape => {
              return <g
                className="floorplan-shape"
                transform={`translate(${shape.x - (shape.width/2)},${shape.y - (shape.height/2)})`}
                key={shape.id}
                style={{cursor: 'pointer'}}
                onClick={() => {
                  this.setState({selectedId: shape.id});
                }}
              >
                {/* Render the given shape on the floorplan */}
                <shape.shape
                  selected={selectedId === shape.id}
                  shape={shape}
                />
              </g>;
            })}
          </g>
        </svg>
      </ReactSVGPanZoom>
    </div>;
  }
}
