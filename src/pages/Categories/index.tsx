import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import horizon from '../../assets/images/horizon.png'
import gtav from '../../assets/images/gtav.png'

import zelda from '../../assets/images/zelda.png'
import red_dead from '../../assets/images/red_dead.png'
import terraria from '../../assets/images/terraria.png'
import nier from '../../assets/images/nier.png'

import diablo from '../../assets/images/diablo.png'
import final7 from '../../assets/images/final_fantasy7.png'
import baldurs3 from '../../assets/images/baldurs3.png'
import dogmas2 from '../../assets/images/dogmas2.png'

import cs2 from '../../assets/images/cs2.png'
import bf4 from '../../assets/images/bf4.png'
import battlefront from '../../assets/images/battlefront.png'
import overwatch from '../../assets/images/overwatch.png'

const acao: Game[] = [
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
    category: 'Ação',
    description:
      'Star Wars Survivors: Enfrente desafios épicos, forje alianças e lute pela sobrevivência na galáxia.',
    title: 'Star Wars Survivor',
    system: 'Windows',
    infos: ['28/04/2023'],
    image: starWars
  },
  {
    id: 3,
    category: 'Aventura',
    description:
      'Horizon Zero Dawn: Explore um mundo pós-apocalíptico habitado por máquinas selvagens e desvende segredos antigos.',
    title: 'Horizon Zero Dawn',
    system: 'Playstation 4',
    infos: ['-10%', 'R$199,00'],
    image: horizon
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Grand Theft Auto V: Entre no mundo do crime, explore Los Santos e forje seu caminho rumo ao poder.',
    title: 'Grand Theft Auto V: Edição Premium',
    system: 'Windows',
    infos: ['-25%', 'R$82,41'],
    image: gtav
  }
]

const aventura: Game[] = [
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
    id: 6,
    category: 'Aventura',
    description:
      'Explore o Velho Oeste, forje laços e sobreviva em uma épica história de honra e traição.',
    title: 'Red dead redemptio 2',
    system: 'Switch',
    infos: ['05/12/2019'],
    image: red_dead
  },
  {
    id: 7,
    category: 'Aventura',
    description:
      'Explore, construa e lute em um mundo cheio de aventuras, monstros e tesouros.',
    title: 'Terraria',
    system: 'Windows',
    infos: ['16/05/2011'],
    image: terraria
  },
  {
    id: 8,
    category: 'Aventura',
    description:
      'Em um futuro distópico, lute pela sobrevivência da humanidade contra invasores mecânicos.',
    title: 'Nier: Automata',
    system: 'Windows',
    infos: ['-60%', 'R$42,80'],
    image: nier
  }
]

const rpg: Game[] = [
  {
    id: 9,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolviemnto pela Blizzard Entertainment.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/10/2023'],
    image: diablo
  },
  {
    id: 10,
    category: 'RPG',
    description:
      'Explore Midgar, lute contra a corporação Shinra e salve o mundo da ameaça de Sephiroth.',
    title: 'Final fantasy 7',
    system: 'Switch',
    infos: ['-60%', 'R$7,99'],
    image: final7
  },
  {
    id: 11,
    category: 'RPG',
    description:
      'Embarque em uma jornada épica de fantasia, explorando o mundo de Forgotten Realms e enfrentando perigos.',
    title: 'Baldurs gate 3',
    system: 'Windows',
    infos: ['03/09/2023'],
    image: baldurs3
  },
  {
    id: 12,
    category: 'RPG',
    description:
      'Explore um mundo aberto repleto de criaturas místicas, desvende segredos e forje seu destino.',
    title: 'Dragons Dogma 2',
    system: 'Windows',
    infos: ['21/03/2024'],
    image: dogmas2
  }
]

const shooter: Game[] = [
  {
    id: 13,
    category: 'Shooter',
    description:
      'Domine o campo de batalha tático, formando equipes e enfrentando desafios intensos em confrontos globais.',
    title: 'Counter strike 2',
    system: 'Windows',
    infos: ['21/09/2012'],
    image: cs2
  },
  {
    id: 14,
    category: 'Shooter',
    description:
      'Entre em batalhas épicas, domine veículos de guerra e lute pela supremacia em cenários dinâmicos.',
    title: 'battlefield 4',
    system: 'Switch',
    infos: ['-85%', 'R$29,85'],
    image: bf4
  },
  {
    id: 15,
    category: 'Shooter',
    description:
      'Participe de batalhas galácticas épicas, controle heróis icônicos e decida o destino da galáxia.',
    title: 'Star Wars Battlefront 2',
    system: 'Windows',
    infos: ['-88%', 'R$19,08'],
    image: battlefront
  },
  {
    id: 16,
    category: 'Shooter',
    description:
      'Entre em combates frenéticos, escolha entre uma variedade de heróis e lute pela vitória em equipe.',
    title: 'Overwatch',
    system: 'Windows',
    infos: ['10/09/2023'],
    image: overwatch
  }
]

const Categories = () => (
  <>
    <ProductsList games={acao} title="Ação" background="gray" />
    <ProductsList games={aventura} title="Aventura" background="black" />
    <ProductsList games={rpg} title="RPG" background="gray" />
    <ProductsList games={shooter} title="FPS" background="black" />
  </>
)

export default Categories
