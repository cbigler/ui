import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import TagInput from './index';
import colorVariables from '../../variables/colors.json';


storiesOf('TagInput', module)
  .add('Default', () => (
    <TagInput
      choices={[
        // These are the choices that show up in the menu when the user types
        { id: 123, label: 'foo' },
        { id: 456, label: 'bar' },
        { id: 789, label: 'baz' },
        { id: 1, label: 'study: boston' },
        { id: 2, label: 'study: nyc' },
        { id: 3, label: 'study: grand forks' },
      ]}
      tags={[
        { id: 123, label: 'foo' },
        { id: 456, label: 'bar' },
      ]}
      placeholder="Start typing to add a tag"
      onCreateNewTag={text => setTags([...tags, {id: Math.random().toString(), label: text}])}
      onAddTag={tag => setTags([...tags, tag])}
      onRemoveTag={tag => setTags(tags.filter(i => i.id !== tag.id))}
    />
  ))
  .add('Interactive', () => {
    function Wrapper() {
      const [tags, setTags] = useState([
        { id: 123, label: 'foo' },
        { id: 456, label: 'bar' },
      ]);

      return (
        <TagInput
          choices={[
            // These are the choices that show up in the menu when the user types
            { id: 123, label: 'foo' },
            { id: 456, label: 'bar' },
            { id: 789, label: 'baz' },
            { id: 1, label: 'study: boston' },
            { id: 2, label: 'study: nyc' },
            { id: 3, label: 'study: grand forks' },
          ]}
          tags={tags}
          placeholder="Start typing to add a tag"
          onCreateNewTag={text => setTags([...tags, {id: Math.random().toString(), label: text}])}
          onAddTag={tag => setTags([...tags, tag])}
          onRemoveTag={tag => setTags(tags.filter(i => i.id !== tag.id))}
        />
      );
    }

    return (
      <Wrapper />
    );
  })
