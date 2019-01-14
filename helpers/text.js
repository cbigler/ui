import React from 'react';

// This takes a list of strings, React elements, or anything, and intersperses in
// correct (Oxford-comma'd) english separators, e.g. "First, Second, and Third"
export function toEnglishList(items, separator=' ') {
  if (items.length < 2) { 
    return items;
  } else if (items.length === 2) {
    return [items[0], ' and', separator, items[1]];
  } else {
    return items.reduce((acc, item, index) => {
      if (index < (items.length - 1)) {
        return [...acc, index > 0 ? ',' : '', separator, item];
      } else {
        return [...acc, ', and', separator, item];
      }
    }, []);
  }
}

export function toEnglishJsxList(items, separator=' ') {
  if (items.length < 2) {
    return <span>{items[0]}</span>;
  } else if (items.length === 2) {
    return <span>{items[0]} and{separator}{items[1]}</span>;
  } else {
    return items.reduce((acc, item, index) => {
      if (index < (items.length - 1)) {
        return <span>{acc}{index > 0 ? ',' : ''}{separator}{item}</span>;
      } else {
        return <span>{acc}, and{separator}{item}</span>;
      }
    }, null);
  }
}
