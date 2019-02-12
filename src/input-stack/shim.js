// Input Stack Shim
// If used in a page without react, this shim adds the missing functionality that the react
// component provides normally. Basically, is a textbox is selected within a input stack, then add
// the focus class to its parent.

function makeInputStack(elem) {
  // When the user focuses a box, add the focus class to a single item.
  jQuery(elem).find("input").on('focus', function() {
    var parent = jQuery(this).parent();
    parent.siblings().removeClass('focus');
    parent.addClass("focus");
  });

  // When the user blurs a box, remove the focus class.
  jQuery(elem).find("input").on('blur', function() {
    var parent = jQuery(this).parent();
    parent.removeClass('focus');
    parent.siblings().removeClass('focus');
  });
}

if (typeof jQuery !== 'undefined') {
  jQuery.fn.inputStack = function() {
    return makeInputStack(this);
  };
}

// Usage:
// var myInputStack = document.getElementById('my-input-stack');
// $(myInputStack).inputStack();
// or:
// makeInputStack(myInputStack)
