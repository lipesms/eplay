import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  padding: 8px 16px;
  border: 2px solid
    ${(prop) => (prop.variant === 'primary' ? colors.green : colors.white)};
  background-color: ${(prop) =>
    prop.variant === 'primary' ? colors.green : 'transparent'};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border: 2px solid ${colors.white};
  background-color: transparent;
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
`
