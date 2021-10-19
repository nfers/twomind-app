import { CodeItem, Container, InfosContainer, TextConTainer } from './styles';
import pic from '../../assets/twomind.jpg'

function HomeHero() {
  return (
    <Container>
      <img src={pic} alt="twomind" />
      <div>
        <TextConTainer>
          <h1>Bem vindos</h1>
          <h2>TwoMind Soft Tech</h2>
        </TextConTainer>
        <InfosContainer>
          <CodeItem>
            <span className="description">Sobre nós</span>
            <span className="info">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="name">TwoMind Soft Tech</span>
            </div>
            <div>
              : <span className="about">Desenvolvimento de Sistemas</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="info">Cargo</span> {'\u007B'}
            <div>
              Especialidade: <span className="name">TwoMind Soft Tech</span>
            </div>
            <div>
              Ramo de Atuação: <span className="about">Desenvolvimento de Sistemas</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
