import React, { useState } from 'react';

import HamburgerButton from './hamburgerButton'
import MenuOverlay from './menuOverlay'

const Menu = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => setOpen(!open)

  return (
    <nav style={{pointerEvents: 'none'}} onClick={clickHandler}>
      <HamburgerButton open={open}/>
      <MenuOverlay open={open}></MenuOverlay>
    </nav>
  )
}

export default Menu