import React from 'react'
import styled from 'styled-components'
import { WHITE_COLOR } from '@theme'

import Logotype from '@ui/Logotype'
import MenuSwitcher from '@ui/MenuSwitcher'

const HeaderStyles = styled('div')`
  padding: 24px 0;
  background: ${WHITE_COLOR};

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Header = () => (
  <HeaderStyles>
    <div className="wrapper">
      <Logotype title="КЗ Богодухівський ліцей №1" />
      <MenuSwitcher />
    </div>
  </HeaderStyles>
)

export default Header
