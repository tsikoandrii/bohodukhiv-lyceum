import React from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'
import BarIcon from '@assets/icons/bar.svg'

const MenuSwitcherStyles = styled('button')`
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  height: 25px;
  cursor: pointer;

  svg {
    height: 100%;
  }
`

const MenuSwitcher = () => {
  return (
    <MenuSwitcherStyles type="button">
      <ReactSVG src={BarIcon} />
    </MenuSwitcherStyles>
  )
}

export default MenuSwitcher
