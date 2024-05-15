import { useState } from 'react'

import * as S from './styles'

import Section from '../Section'

import play from '../../assets/images/hero/play.png'
import zoom from '../../assets/images/hero/zoom.png'
import closeIcon from '../../assets/images/hero/fechar.png'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () =>
    setModal({
      isVisible: false,
      url: '',
      type: 'image'
    })

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={index}
              onClick={() => {
                setModal({
                  isVisible: true,
                  url: media.url,
                  type: media.type
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`midia ${index} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para ver a midia em tamanho maior"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              className="close-icon"
              src={closeIcon}
              alt="Icone de fechar"
              onClick={closeModal}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} frameBorder="0"></iframe>
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
