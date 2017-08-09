'use strict';

// Popover Shim
// If used in a page without react, this shim adds the missing functionality that the react
// component provides normally. Basicaly, if a textbox 1

// Include popper.js: https://github.com/FezVrasta/popper.js#installation

function makePopover(target, popover) {
  var popper = new Popper(target, popover, {
    modifiers: {
      arrow: {
        enabled: true,
        element: ".popover-arrow"
      }
    }
  });

  // If the user clicks the popover, then
  jQuery(target).on('click', function () {
    if (jQuery(popover).css('display') === 'none') {
      jQuery(popover).css('display', 'block');
    } else {
      jQuery(popover).css('display', 'none');
    }
  });
}

if (typeof jQuery !== 'undefined') {
  jQuery.fn.popover = function () {
    return makePopover(this);
  };
}

