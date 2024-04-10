import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import {
  Overlay,
  CartContainer,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'

import Button from '../Button'
import Tag from '../Tag'

import { remove, close } from '../../store/reducers/cart'
import { formatePrice } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id = 0) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, currentValue) => {
      return (acc += currentValue.prices.current!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img
                src={item.media.thumbnail}
                alt={`Foto do jogo ${item.name}`}
              />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatePrice(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogos no carrinho</Quantity>
        <Prices>
          Total de {formatePrice(getTotalPrice())}{' '}
          <span>em até 6x sem juros</span>
        </Prices>
        <Button title="Continuar com a compra" type="button">
          Containuer com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
