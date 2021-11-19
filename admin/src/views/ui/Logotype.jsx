import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ACCENT_COLOR, BLACK_COLOR, FONT_2, YELLOW_COLOR } from '@theme'

const LogotypeStyles = styled('a')`
  position: relative;
  font-family: ${FONT_2};
  padding-left: 14px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;

  &::after {
    position: absolute;
    display: block;
    content: '';
    left: 0;
    top: 50%;
    height: 34px;
    width: 4px;
    background: ${ACCENT_COLOR};
    transform: translateY(-50%);
  }
`

const Label = styled('span')`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: ${YELLOW_COLOR};
`

const Title = styled('span')`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${BLACK_COLOR};
`

const Logotype = ({ title }) => {
  return (
    <LogotypeStyles href="/">
      <Label>Комунальний заклад</Label>
      <Title>{title}</Title>
    </LogotypeStyles>
  )
}

Logotype.propTypes = {
  title: {
    type: PropTypes.string,
    required: true,
  },
}

export default Logotype
