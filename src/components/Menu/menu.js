import React, { useState } from 'react';

import HamburgerButton from './hamburgerButton'
import MenuOverlay from './menuOverlay'

const Menu = (props) => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    props.setMenu(!open);
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
