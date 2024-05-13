import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'
import { remove, close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'
import { parseToBrl } from '../../utils'

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
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img
                src={item.media.thumbnail}
                alt={`Foto do jogo ${item.name}`}
              />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogos no carrinho</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice())}{' '}
          <span>em até 6x sem juros</span>
        </S.Prices>
        <Button title="Continuar com a compra" type="button">
          Containuer com a compra
        </Button>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
