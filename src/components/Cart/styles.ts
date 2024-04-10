import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import close from '../../assets/images/hero/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`
export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 40px 16px 0 16px;
  background-color: ${cores.cinza};
  z-index: 1;
  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 24px;
  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
  margin: 32px 0 16px;
`
export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid ${cores.cinzaClaro};

  img {
    height: 80xp;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${cores.branca};
  }
  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.branca};
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    position: absolute;
    top: 8px;
    right: 0;
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`
