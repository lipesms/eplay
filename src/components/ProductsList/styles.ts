import styled from 'styled-components'

import { Props } from '.'
import { breackpoints, colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.grey};
  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.grey : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breackpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breackpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
