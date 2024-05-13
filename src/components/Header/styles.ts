import { styled } from 'styled-components'

import { breackpoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breackpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.grey};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }


  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breackpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
`

export const NavMobile = styled.nav`
  display: none;

  &.isOpen {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breackpoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`

export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breackpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  cursor: pointer;
  span {
    width: 100%;
    height: 2px;
    display: block;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breackpoints.tablet}) {
    display: none;
  }
`
