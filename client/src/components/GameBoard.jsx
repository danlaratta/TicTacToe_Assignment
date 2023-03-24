import React, { useState } from 'react'
import Square from './Square'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 5rem;
    font-weight: 700;
`

const Board = styled.div`
    background-color: #000;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 1rem;
`

const Row = styled.div`
    display: flex;
`

const Status = styled.span`
    display: flex;
`

const GameBoard = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [toggleTurn, setToggleTurn] = useState(false)

    const handleSquareClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        
        if(toggleTurn === false) { 
            nextSquares[i] = "X"
        }
        else {
            nextSquares[i] = "O"
        }

        setSquares(nextSquares)
        setToggleTurn(!toggleTurn)
    }

    const calculateWinner = (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

      const winner = calculateWinner(squares);
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
      }

  return (
    <Container>
        <Title> Tic Tac Toe </Title>

        <Status> {Status} </Status>

        <Board>
            <Row>
                <Square value={squares[0]} sqaureClick={() => handleSquareClick(0)} />
                <Square value={squares[1]} sqaureClick={() => handleSquareClick(1)} />
                <Square value={squares[2]} sqaureClick={() => handleSquareClick(2)} />
            </Row>

            <Row>
                <Square value={squares[3]} sqaureClick={() => handleSquareClick(3)} />
                <Square value={squares[4]} sqaureClick={() => handleSquareClick(4)} />
                <Square value={squares[5]} sqaureClick={() => handleSquareClick(5)} />
            </Row>

            <Row>
                <Square value={squares[6]} sqaureClick={() => handleSquareClick(6)} />
                <Square value={squares[7]} sqaureClick={() => handleSquareClick(7)} />
                <Square value={squares[8]} sqaureClick={() => handleSquareClick(8)} />
            </Row>
        </Board>
            
    </Container>
  )
}

export default GameBoard