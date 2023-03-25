import React from 'react'
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

const GameBoard = ({ xIsNext, squares, onPlay, calculateWinner }) => {
    const winner = calculateWinner(squares)

    let status;

    if (winner) {
        status = "Player  " + winner + " is the winner!"
    } 
    else {
        status = "Next player: " + (xIsNext ? "X" : "O")
    }

    const handleSquareClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return
        }

        const nextSquares = squares.slice()

        if (xIsNext) {
          nextSquares[i] = "X"
        } else {
          nextSquares[i] = "O"
        }

        onPlay(nextSquares)
    }

  return (
    <Container>
        <Title> Tic Tac Toe </Title>
        <h1> {status} </h1>
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
