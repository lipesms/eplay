import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import horizon from '../../assets/images/horizon.png'
import gtav from '../../assets/images/gtav.png'
import zelda from '../../assets/images/zelda.png'
import baldurs3 from '../../assets/images/baldurs3.png'
import dogmas2 from '../../assets/images/dogmas2.png'
import battlefront from '../../assets/images/battlefront.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de survival horror...',
    title: 'Resident evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$169,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Aventura',
    description:
      'Horizon Zero Dawn: Explore um mundo pós-apocalíptico habitado por máquinas selvagens e desvende segredos antigos.',
    title: 'Horizon Zero Dawn',
    system: 'Playstation 4',
    infos: ['-10%', 'R$199,00'],
    image: horizon
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Grand Theft Auto V: Entre no mundo do crime, explore Los Santos e forje seu caminho rumo ao poder.',
    title: 'Grand Theft Auto V: Edição Premium',
    system: 'Windows',
    infos: ['-25%', 'R$82,41'],
    image: gtav
  },
  {
    id: 4,
    category: 'Shooter',
    description:
      'Participe de batalhas galácticas épicas, controle heróis icônicos e decida o destino da galáxia.',
    title: 'Star Wars Battlefront 2',
    system: 'Windows',
    infos: ['-88%', 'R$19,08'],
    image: battlefront
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Star Wars Survivors: Enfrente desafios épicos, forje alianças e lute pela sobrevivência na galáxia.',
    title: 'Star Wars Survivor',
    system: 'Windows',
    infos: ['28/04/2023'],
    image: starWars
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Zelda Tears of the Kingdom: Embarque em uma jornada épica para salvar Hyrule, enfrentando perigos e desvendando mistérios.',
    title: 'Zelda Tears of the Kingdown',
    system: 'Nintendo Switch',
    infos: ['12/05/2023'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Embarque em uma jornada épica de fantasia, explorando o mundo de Forgotten Realms e enfrentando perigos.',
    title: 'Baldurs gate 3',
    system: 'Windows',
    infos: ['03/09/2023'],
    image: baldurs3
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Explore um mundo aberto repleto de criaturas místicas, desvende segredos e forje seu destino.',
    title: 'Dragons Dogma 2',
    system: 'Windows',
    infos: ['21/03/2024'],
    image: dogmas2
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
