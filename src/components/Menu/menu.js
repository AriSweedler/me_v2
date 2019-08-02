import React, { useState } from 'react';

import HamburgerButton from './hamburgerButton'
import MenuOverlay from './menuOverlay'

// Scroll utility copy/pasted from https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
// eslint-disable-next-line
class DomUtils {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  static keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  static preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  static preventDefaultForScrollKeys(e) {
    if (DomUtils.keys[e.keyCode]) {
      DomUtils.preventDefault(e);
      return false;
    }
  }

  static disableScroll() {
    document.addEventListener('wheel', DomUtils.preventDefault, {
      passive: false,
    }); // Disable scrolling in Chrome
    document.addEventListener('keydown', DomUtils.preventDefaultForScrollKeys, {
      passive: false,
    });
  }

  static enableScroll() {
    document.removeEventListener('wheel', DomUtils.preventDefault, {
      passive: false,
    }); // Enable scrolling in Chrome
    document.removeEventListener(
      'keydown',
      DomUtils.preventDefaultForScrollKeys,
      {
        passive: false,
      }
    ); // Enable scrolling in Chrome
  }
}

const Menu = () => {
  const [open, setOpen] = useState(false);

  // Change state and dis/enable scrolling upon click
  // (Disabled for now because how to re-enable scrolling when a link is selected)
  const clickHandler = () => {
    //if (!open) DomUtils.disableScroll();
    //else DomUtils.enableScroll();
    setOpen(!open)
  }

  return (
    <nav style={{pointerEvents: 'none'}} onClick={clickHandler}>
      <HamburgerButton open={open}/>
      <MenuOverlay open={open}></MenuOverlay>
    </nav>
  )
}

export default Menu
