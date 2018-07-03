import React, { Component } from 'react';
import { applyToPoint } from 'transformation-matrix';

import {ReactSVGPanZoom, TOOL_NONE, TOOL_AUTO} from 'react-svg-pan-zoom';

import { IconPlus } from '@density/ui-icons';

import colorVariables from '@density/ui/variables/colors.json';
import fontVariables from '@density/ui/variables/fonts.json';

const POPUP_VERTICAL_OFFSET_FROM_SELECTED_ITEM_IN_PX = 28;
const POPUP_HORIZONTAL_OFFSET_FROM_SELECTED_ITEM_IN_PX = -150;

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

export const CIRCLE = ({scale, selected, index}) => <g className="Circle">
  <circle
    cx={21}
    cy={21}
    r={26 * scale}
    style={{
      opacity: selected ? 0.35 : 0,
      fill: colorVariables.brandPrimary, /* must be here for transition to work */
                                         /* see https://stackoverflow.com/a/20012937/4115328 */
      transition: "all 200ms ease-in-out",
    }}
  />
  <circle
    cx={21}
    cy={21}
    r={18 * scale}
    fill={colorVariables.brandPrimary}
  />
</g>;

export class PlannerPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="interactive-floorplan-popup">
        <label for="interactive-floorplan-doorway-name">Doorway Name</label>
        <span
          className="interactive-floorplan-doorway-name"
          id="interactive-floorplan-doorway-name"
        >Conference Room 1</span>

        <label for="interactive-floorplan-doorway-name">Doorway Name</label>
      </div>
    );
  }
}

export default class Floorplan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      panZoomMatrix: {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0},
      selectedShapeMoving: false,
      hoveringOverShape: false,

      // Display the tooltip following the cursor offscreen until the first mousemove event.
      lastMouseX: -1000,
      lastMouseY: -1000,
    };

    this.shapeRefs = {};
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

    const { shapes, image, onCreateShape, onShapeMovement } = this.props;
    const { hoveringOverShape, selectedShapeMoving, selectedId, panZoomMatrix } = this.state;

    const scaleFactor = 1 / panZoomMatrix.a;

    // Given the selected id, get a reference to the selected shape.
    const selectedShape = selectedId ? shapes.find(i => i.id === selectedId) : null;

    // Also, store a reference to the last shape to be selected. This is used so that popups and
    // other things that fade out after the shape is deselected can stay positioned next to the
    // selected shape as they fade out.
    this.lastSelectedShape = selectedShape || this.lastSelectedShape;

    return (
      <div
        className="floorplan"
        ref={r => {
          const firstUpdate = typeof this.container === 'undefined';
          this.container = r;
          if (firstUpdate) {
            this.forceUpdate();
          }
        }}
        onMouseMove={e => {
          // Selected shape is being moved, update its x and y coordinates.
          if (selectedShapeMoving) {
            if (e.buttons > 0) {
              // Calculate the distance that the mouse has moved since the last update.
              const deltaX = (e.clientX * scaleFactor) - this.state.lastMouseX;
              const deltaY = (e.clientY * scaleFactor) - this.state.lastMouseY;

              // Add that delta to the current x and y coords.
              let x = selectedShape.x + deltaX;
              let y = selectedShape.y + deltaY;

              // Call a callback, passing those new coords. This callback
              // should update the state of the component, moving the shapes.
              if (onShapeMovement) {
                onShapeMovement(selectedId, x, y);
              }
            } else {
              // Item is no longer being moved, unset the `selectedShapeMoving` flag.
              this.setState({selectedShapeMoving: false});
            }
          }

          // Update the last mouse positions with the current positions - for the next frame.
          this.setState({
            lastMouseX: e.clientX * scaleFactor,
            lastMouseY: e.clientY * scaleFactor,
          });
        }}
        style={!selectedShape ? {cursor: 'none'} : {}}
      >
        {(() => {
          let styles = {};

          if (this.lastSelectedShape) {
            // Was the selected shape deleted? If so, don't render the popup, and deselect the
            // active shape if one is selected.
            if (!this.shapeRefs[this.lastSelectedShape.id]) {
              this.lastSelectedShape = null; // Remove "last" selected shape.
              setTimeout(() => { // Remove currently delected shape.
                this.setState({selectedId: null});
              }, 100);
              return null;
            }

            // Figure out where popup should be. Use the position of the shape on the canvas to get
            // the upper left hand x and y coordinates.
            let {x, y} = this.shapeRefs[this.lastSelectedShape.id].getBoundingClientRect();

            // Add offsets such that the x and y coordinates refer to the middle of the shape, not the
            // top left.
            x += this.lastSelectedShape.width / 2;
            y += this.lastSelectedShape.height / 2;

            // Offset the popup by the required amount.
            x += POPUP_HORIZONTAL_OFFSET_FROM_SELECTED_ITEM_IN_PX;
            y += POPUP_VERTICAL_OFFSET_FROM_SELECTED_ITEM_IN_PX;

            // Ensure that the popup can't overflow the bounds of its container.
            let popupBounds = this.popupRef.getBoundingClientRect();
            if (x < 10) { x = 10; }
            if (x > width - popupBounds.width - 20) { x = width - popupBounds.width - 20; }

            if (y < 10) { y = 10; }
            if (y > height - popupBounds.height - 20) {
              y = y - popupBounds.height - this.lastSelectedShape.height - 24;
            }

            // Assign position.
            styles.left = x;
            styles.top = y;
          }

          const shouldPopupBeOpen = selectedShape && !selectedShapeMoving;
          styles.opacity = shouldPopupBeOpen ? 1 : 0;
          styles.pointerEvents = shouldPopupBeOpen ? 'all' : 'none';

          return <div
            className="floorplan-popup"
            style={styles}
            ref={r => { this.popupRef = r; }}
          >
            {this.lastSelectedShape ? this.lastSelectedShape.popup(this.lastSelectedShape) : null}
          </div>;
        })()}

        {!hoveringOverShape && !selectedShape ? (
          <div className="floorplan-cursor" style={{
            left: (this.state.lastMouseX / scaleFactor),
            top: (this.state.lastMouseY / scaleFactor),
          }}>
            <IconPlus color="primary" />
            <span className="floorplan-cursor-tag">
              Click to add a doorway
            </span>
          </div>
        ) : null}

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
          onZoom={() => this.setState({
            selectedShapeMoving: false,
            selectedId: null,

            // On zoom. reset these values so that they can be
            // recomputed with the new scale factor.
            lastMouseX: -1000,
            lastMouseY: -1000,
          })}
          onClick={e => {
            if (selectedShape) {
              return;
            }

            // The user clicked the background without a shape selected, so create a new shape!
            if (onCreateShape) {
              onCreateShape(e.x, e.y);
            }
          }}
        >
          <svg
            className="floorplan-svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
          >
            <g className="floorplan-layer-image">
              <image
                xlinkHref={image}
                x={0}
                y={0}
                onClick={() => this.setState({selectedShapeMoving: false, selectedId: null})}
              />
            </g>

            <g className="floorplan-layer-shapes">
              {shapes.map((shape, index) => {
                const translateX = shape.x - (shape.width/2);
                const translateY = shape.y - (shape.height/2);
                return <g
                  className="floorplan-shape"
                  transform={`translate(${translateX},${translateY})`}
                  key={shape.id}
                  style={{cursor: 'pointer'}}
                  onClick={e => {
                    this.setState({
                      selectedId: shape.id,
                      selectedShapeMoving: false,
                    });

                    // Ensure that the click event won't make its way to the floorplan
                    // and create a new shape.
                    e.stopPropagation();
                  }}
                  onMouseMove={e => {
                    // The above only applies to the actively selected shape.
                    if (selectedId !== shape.id) {
                      return;
                    }

                    // If the user started clicking and dragging on an shape, then
                    // start moving that shape.
                    if (shape.allowMovement && !selectedShapeMoving && e.buttons > 0) {
                      // Set initial x and y mouse positions. This is used to calculate mouse deltas
                      // on future mousemoves.
                      this.setState({
                        lastMouseX: e.clientX * scaleFactor,
                        lastMouseY: e.clientY * scaleFactor,

                        // Set the flag indicating the currently selected doorway is being moved.
                        selectedShapeMoving: true,
                      });
                    }
                  }}
                  ref={r => { this.shapeRefs[shape.id] = r; }}
                  onMouseEnter={() => this.setState({hoveringOverShape: true})}
                  onMouseLeave={() => this.setState({hoveringOverShape: false})}
                >
                  {/* Render the given shape on the floorplan */}
                  <shape.shape
                    selected={selectedId === shape.id}
                    isMoving={selectedId === shape.id && selectedShapeMoving}
                    index={index}
                    /* I'd love to apply a css scale transformation instead, but it'd need a 
                     * transform-origin property, and that would effect the transform already
                     * being done. */
                    scale={scaleFactor}

                    shape={shape}
                  />
                </g>;
              })}
            </g>
          </svg>
        </ReactSVGPanZoom>
      </div>
    );
  }
}
