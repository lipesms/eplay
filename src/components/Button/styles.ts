import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  padding: 8px 16px;
  border: 2px solid
    ${(prop) => (prop.variant === 'primary' ? cores.verde : cores.branca)};
  background-color: ${(prop) =>
    prop.variant === 'primary' ? cores.verde : 'transparent'};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border: 2px solid ${cores.branca};
  background-color: transparent;
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
`
