import GameBoard from './components/GameBoard'
import styled from 'styled-components'
import Table from './components/Table';

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
          {/* <GameBoard /> */}
          <Table />
      </Container>
  );
}

export default App;
