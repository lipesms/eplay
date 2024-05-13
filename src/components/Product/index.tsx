import Tag from '../Tag'

import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescricao = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92).concat('...')
    }
    return text
  }
  return (
    <S.Card
      to={`/product/${id}`}
      title={`clique aqui para ver mais detalhes do jogo ${title}`}
    >
      <img src={image} alt="" />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{getDescricao(description)}</S.Description>
    </S.Card>
  )
}

export default Product
