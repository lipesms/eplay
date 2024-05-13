import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <img src={logo} alt="Eplay logo" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  to="/categorias"
                  title="Clique aqui para acessar a página de categorias"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  to="/#comming-soon"
                  title="Clique aqui para acessar a seção de em breve"
                >
                  Novidades
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  to="/#on-sale"
                  title="Clique aqui para acessar a seção de promoções"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cartIcon} alt="carrinho de compra" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isOpen ? 'isOpen' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              to="/categorias"
              title="Clique aqui para acessar a página de categorias"
              onClick={() => setIsOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              to="/#comming-soon"
              title="Clique aqui para acessar a seção de em breve"
              onClick={() => setIsOpen(false)}
            >
              Novidades
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              to="/#on-sale"
              title="Clique aqui para acessar a seção de promoções"
              onClick={() => setIsOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
