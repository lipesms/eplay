import { Container, Title } from './styles'

export type Props = {
  title: string
  children: JSX.Element
  background: 'black' | 'gray'
}

const Section = ({ title, children, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </Container>
)

export default Section
