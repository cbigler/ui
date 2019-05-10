import React, { Fragment, Component } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';
import fuzzy from 'fuzzy';
import Icons from '../icons';

const NULL_CHARACTER = String.fromCharCode(0);

export default class TagInput extends Component {
  input = React.createRef();

  static defaultProps = {
    choices: [],
    tags: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      text: props.defaultValue || '',
      focused: false,
      focusedTagId: null,
      focusedDropdownItemIndex: 0,
    };
  };

  blinkTag = (tagId, duration=1000) => {
    this.setState({focusedTagId: tagId}, () => {
      setTimeout(() => {
        this.setState({focusedTagId: null});
      }, duration);
    });
  }

  clearInput = e => {
    e.preventDefault(); // Stop tab jumping to next form control
    this.setState({text: ''});
  }

  render() {
    const {
      tags,
      choices,
      placeholder,
      canCreateNewTags,
      onRemoveTag,
      onAddTag,
      onCreateNewTag,
    } = this.props;
    const { text, focused, focusedTagId, focusedDropdownItemIndex } = this.state;

    const selectedTagIds = tags.map(t => t.id);
    const choicesNotAlreadySelected = choices.filter(c => !selectedTagIds.includes(c.id))
    const matches = fuzzy.filter(text, choicesNotAlreadySelected, {
      pre: NULL_CHARACTER,
      post: NULL_CHARACTER,
      extract: i => i.label,
    });

    return (
      <div
        className={classnames(styles.wrapper, {[styles.focused]: focused})}
        onClick={() => {
          this.input.current.focus();
          this.setState({focused: true});
        }}
      >
        {tags.map(tag => (
          <div
            key={tag.id}
            className={classnames(styles.tag, {[styles.focus]: focusedTagId === tag.id})}
            onClick={e => e.stopPropagation()}
          >
            {tag.label}
            <div className={styles.closeIcon} onClick={() => onRemoveTag(tag)}>
              <Icons.Close width={8} height={8} />
            </div>
          </div>
        ))}
        <input
          type="text"
          placeholder={placeholder}
          className={styles.input}

          value={text}
          onChange={e => this.setState({text: e.target.value})}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === 'Tab') {
              // Empty tags are not allowed
              if (text.length === 0) { return; }

              const existingTagWithSameName = tags.find(tag => tag.label.trim() === text.trim());

              // If the tag already exists, then don't call onCreateNewTag since it's
              // already in the array once
              if (existingTagWithSameName) {
                this.blinkTag(existingTagWithSameName.id);
                this.clearInput(e);
                return;
              }

              // If the tag is already a choice, then add it rather than creating it from a text
              // slug.
              const matchingTagInChoices = choices.find(choice => choice.label.trim() === text.trim());
              if (matchingTagInChoices) {
                onAddTag(matchingTagInChoices);
                this.clearInput(e);
                return;
              }

              // As a last resort, create a brand new tag
              if (!canCreateNewTags) {
                return;
              }
              onCreateNewTag(text.trim());
              this.clearInput(e);
            } else if (e.key === 'Backspace' && text.length === 0 && tags.length > 0) {
              // Initially focus a tag
              if (!this.state.focusedTagId) {
                this.setState({focusedTagId: tags[tags.length-1].id});
                return;
              }

              // Delete the last tag
              const secondToLastTag = tags[tags.length - 2];
              onRemoveTag(tags.find(t => t.id === this.state.focusedTagId));
              this.setState({
                focusedTagId: secondToLastTag ? secondToLastTag.id : null,
              });

            } else if (e.key === 'Escape' || this.state.focusedTagId) {
              this.setState({focusedTagId: null});
            }
          }}

          ref={this.input}
          onFocus={() => this.setState({focused: true})}
          onBlur={() => this.setState({focused: false})}
        />

        {text.length > 0 ? (
          <ul className={styles.dropdown}>
            {matches.map((match, index) => (
              <li
                key={match.original.id}
                className={classnames(styles.dropdownItem, {
                  [styles.focused]: focusedDropdownItemIndex === index,
                })}
                onMouseEnter={() => this.setState({focusedDropdownItemIndex: index})}
                onMouseLeave={e => e.stopPropagation()}
                onClick={e => {
                  onAddTag(match.original)
                  this.clearInput(e);
                }}
              >
                {
                  match.string.split(NULL_CHARACTER)
                  .map((section, index) => {
                    if (index % 2 === 0) {
                      // Even indexes = keep normal
                      return (
                        <Fragment>{section}</Fragment>
                      );
                    } else {
                      // Odd indexes = highlight
                      return (
                        <strong>{section}</strong>
                      );
                    }
                  })
                  .reduce((acc, next) => <Fragment>{acc}{next}</Fragment>, null)
                }
              </li>
            ))}
            <li
              className={classnames(styles.dropdownItem, {
                [styles.focused]: focusedDropdownItemIndex === -1,
              })}
              onMouseEnter={() => this.setState({focusedDropdownItemIndex: -1})}
              onMouseLeave={e => e.stopPropagation()}
              onClick={e => {
                if (!canCreateNewTags) {
                  return;
                }
                onCreateNewTag(text);
                this.clearInput(e);
              }}
            >Add "{text}"</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
