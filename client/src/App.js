import styled from 'styled-components'
import Game from './components/Game';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

function App() {
  return (
      <Container>
          <Game />
      </Container>
  );
}

export default App;
