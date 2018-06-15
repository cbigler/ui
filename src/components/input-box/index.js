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

    this.focusedChoice = null;

    // Holds a reference to each dom node in the choice list so that they can be programatically
    // blurred when the box is closed.
    this.choiceNodes = {
      /* 'spc_xxx': <domnode>, */
    };

    // Called when the user focuses either the value or an item in the menu part of the box.
    this.onMenuFocus = choice => {
      this.setState({opened: true});
      this.focusedChoice = choice;
    };

    // Called when the user blurs either the value or an item in the menu part of the box.
    this.onMenuBlur = () => {
      this.setState({opened: false});
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
    const { value, choices, className, id, disabled } = this.props;
    const { opened } = this.state;

    // Allow `value` to either be:
    // 1. The raw element in `choices` (ie, choices.indexOf(value) isn't -1)
    // 2. An id of an element in `choices`
    let selectedValue;
    if (value && value.id) {
      selectedValue = value;
    } else if (choices) {
      selectedValue = choices.find(i => i.id === value);
    } else {
      selectedValue = null;
    }

    return <div className={classnames('input-box-select-box', className)}>
      <div
        className={classnames(`input-box-select-box-value`, {disabled, opened})}

        onFocus={() => this.onMenuFocus(null)}
        onBlur={this.onMenuBlur}
        onKeyDown={e => {
          if (e.keyCode === 27 /* escape */) {
            e.target.blur();
          }
        }}
        onMouseDown={e => {
          if (this.state.opened) {
            e.preventDefault();
            e.target.blur();
          }
        }}

        aria-expanded={opened}
        aria-autocomplete="list"
        tabIndex={disabled ? -1 : 0}
        id={id}
      >
        {selectedValue ?
          <span>{selectedValue.label}</span> :
          <span className="input-box-select-placeholder">No selection</span>
        }
        <IconChevronDown color="primary" width={12} height={12} />
      </div>

      <div
        role="listbox"
        className={classnames('input-box-select-box-menu', {opened})}
      >
        <ul>
          {(choices || []).map(choice => {
            return <li
              key={choice.id}
              ref={r => { this.choiceNodes[choice.id] = r; }}

              className={classnames('input-box-select-box-menu-item', {
                disabled: choice.disabled,
              })}

              id={`input-box-select-${choice.id.toString().replace(' ', '-')}`}
              role="option"
              aria-selected={selectedValue && selectedValue.id === choice.id}
              tabIndex={!choice.disabled && opened ? 0 : -1}

              onFocus={() => this.onMenuFocus(choice)}
              onBlur={this.onMenuBlur}
              onKeyDown={e => {
                if (e.keyCode === 13 /* enter */) {
                  this.onMenuItemSelected(choice);
                } else if (e.keyCode === 27 /* escape */) {
                  e.target.blur();
                }
              }}
              onMouseDown={e => choice.disabled && e.preventDefault()}
              onClick={() => choice.disabled || this.onMenuItemSelected(choice)}
            >
              {choice.label}
            </li>;
          })}
        </ul>
      </div>
    </div>;
  }
}
