import { Game } from '../pages/Home'

export const parseToBrl = (preco = 0) => {
  return new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acc, currentItem) => {
    if (currentItem.prices.current) {
      return (acc += currentItem.prices.current)
    }
    return 0
  }, 0)
}
