import React from 'react';

// This takes a list of strings, React elements, or anything, and intersperses in
// correct (Oxford-comma'd) english separators, e.g. "First, Second, and Third"
export function toEnglishList(items) {
  if (items.length < 2) { 
    return items;
  } else if (items.length === 2) {
    return [items[0], ' and ', items[1]];
  } else {
    return items.reduce((acc, item, index) => {
      return [
        ...acc,
        index < (items.length - 1) ? (acc.length > 0 ? ', ' : '') : ', and ',
        item,
      ];
    }, []);
  }
}

export function toEnglishJsxList(items) {
  if (items.length < 2) {
    return (
      <span>{items[0]}</span>
    );
  } else if (items.length === 2) {
    return (
      <span>{items[0]} and {items[1]}</span>
    );
  } else {
    return items.reduce((acc, item, index) => {
      if (index < (items.length - 1)) {
        return (
          <span>
            {acc}
            {index > 0 ? ', ' : ''}
            {item}
          </span>
        );
      } else {
        // Special case for last item
        return (
          <span>{acc}, and {item}</span>
        );
      }
    }, null);
  }
}
