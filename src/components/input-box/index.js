import * as React from 'react';
import classnames from 'classnames';

import { IconChevronDown } from '@density/ui-icons';

export default function InputBox(props) {
  switch (props.type) {
  // Selects need a custom class added to them so that they'll hide the caret and add some padding
  // to the right.
  case 'select':
    return <SelectBox {...props} />;
  case 'textarea':
    return <textarea
      {...props}
      className={classnames(
        'input-box',
        'input-box-textarea',
        props.className
      )}
    />;
  default:
    return <input
      {...props}
      className={classnames(
        'input-box',
        props.disabled ? 'input-box-disabled' : null,
        props.className
      )}
    />;
  }
}


export class SelectBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    // Flag used to store if the "menu" part of the box has focus; this is required because when a
    // user clicks on the menu the "value" part of the box no longer has focus but we don't want the
    // box to close.
    this.menuInFocus = false;

    this.focusedChoice = null;

    // Holds a reference to each dom node in the choice list so that they can be programatically
    // blurred when the box is closed.
    this.choiceNodes = {
      /* 'spc_xxx': <domnode>, */
    };

    // Called when the user focuses either the value or an item in the menu part of the box.
    this.onMenuFocus = choice => {
      this.menuInFocus = true;
      this.setState({opened: true});
      this.focusedChoice = choice;
    };

    // Called when the user blurs either the value or an item in the menu part of the box.
    this.onMenuBlur = () => {
      this.menuInFocus = false;

      // Imagine this scenario:
      // 1. User focuses value part of selectbox.
      // 2. User focuses an item in the selectbox, which causes a blur event on the value part of
      // the selectbox.
      // 3. We want this order:
      //   - The blur to set `menuInFocus` to false
      //   - The focus to set `menuInFocus` to true
      //   - Then, determine if the box should be closed by checking the `menuInFocus` flag
      // To get the last step to run at the end, this timeout is used.
      setTimeout(() => {
        if (!this.menuInFocus) {
          this.setState({opened: false});
        }
      }, 50);
    };

    // Called when the user selects an item within the menu of the select box.
    this.onMenuItemSelected = choice => {
      this.setState({opened: false}, () => {

        // Defocus selected item. If this is not done, then clicking on the "value" part of the box
        // again will cause this item to blur, which causes the menu part of the box to hide and
        // unhide in quick succession.
        this.choiceNodes[choice.id].blur();

        if (this.props.onChange) {
          this.props.onChange(choice.id === 'default' ? null : choice);
        }
      });
    }
  }

  render() {
    const { value, choices } = this.props;
    const { opened } = this.state;

    return <div className="input-box-select-box">
      <div
        className="input-box-select-box-value"
        aria-label="Space Hierarchy"

        onFocus={() => this.onMenuFocus(null)}
        onBlur={this.onMenuBlur}
        onKeyUp={e => {
          if (e.keyCode === 27 /* escape */) {
            this.onMenuBlur();
          }
        }}

        aria-expanded={opened}
        aria-autocomplete="list"
        tabIndex="0"
      >
        {value ? <span>{value.label}</span> : <span className="input-box-select-placeholder">No selection</span>}
        <IconChevronDown color="primary" width={12} height={12} />
      </div>

      <div
        role="listbox"
        className={classnames('input-box-select-box-menu', {opened})}
        onMouseEnter={() => { this.menuInFocus = true; }}
        onMouseLeave={() => { this.menuInFocus = false; }}
      >
        <ul>
          {choices.map(choice => {
            return <li
              key={choice.id}
              ref={r => { this.choiceNodes[choice.id] = r; }}

              className={classnames('input-box-select-box-menu-item', {
                disabled: choice.disabled,
              })}

              id={`input-box-select-${choice.id.toString().replace(' ', '-')}`}
              role="option"
              aria-selected={value && value.id === choice.id}
              tabIndex={!choice.disabled && opened ? 0 : -1}

              onFocus={() => this.onMenuFocus(choice)}
              onBlur={this.onMenuBlur}
              onKeyUp={e => {
                if (e.keyCode === 13 /* enter */) {
                  this.onMenuItemSelected(choice);
                } else if (e.keyCode === 27 /* escape */) {
                  this.onMenuBlur();
                }
              }}
              onMouseUp={() => {
                if (!choice.disabled) {
                  this.onMenuItemSelected(choice);
                }
              }}
            >
              {choice.label}
            </li>;
          })}
        </ul>
      </div>
    </div>;
  }
}
