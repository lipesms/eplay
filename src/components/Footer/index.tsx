import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              to="/categorias#rpg"
              title="Clique aqui para acessar jogos de RPG"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categorias#action"
              title="Clique aqui para acessar jogos de Ação"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categorias#sports"
              title="Clique aqui para acessar jogos de Esportes"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categorias#simulation"
              title="Clique aqui para acessar jogos de Simulação"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categorias#fight"
              title="Clique aqui para acessar jogos de Luta"
            >
              fight
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              to="/#on-sale"
              title="Clique aqui para acessar a seção de promoções"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/#comming-soon"
              title="Clique aqui para acessar a seção de em breve"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
