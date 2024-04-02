import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwards legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry
          getPositionOfLineAndCharacter. Embarquer em uma jornada por locais
          novos e familiares enquanto explora e descobre animais fantásticos,
          personalize seu personagem e crie poções, domine o lançamento de
          feitiços, aprimore talentos e torne-se o bruxo que deseja se realize.
          Experimente Hogwarts da década de 1800. Seu personagem é um estudante
          com chave de um antigo segredo que ameaça destruir o mundo bruxo. Faça
          inesperado, lute contra os bruxos das trevas e decida o destino do
          mundo bruxo. Seu legado é o que você faz delete. Viva o inesperado.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma</b>: Playstation 5 <br />
          <b>Desenvolvedor</b>: Avalanche Software <br />
          <b>Editora</b>: Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment <br />
          <b>Idiomas</b>: O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de áudio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <div>Fotos</div>
      </Section>
    </>
  )
}

export default Product
