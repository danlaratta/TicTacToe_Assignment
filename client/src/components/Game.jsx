import React, { useState } from 'react'
import styled from 'styled-components'
import GameBoard from './GameBoard'

const Container = styled.div`
    
`

const Wrapper = styled.div`
    
`

const MovesHistory = styled.div`
    
`

const Moves = styled.ol`
    
`

const MovesList = styled.li`
    
`

const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    
    const currentSquares = history[currentMove];
    
    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    } 


    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description

        if (move > 0) {
        description = 'Go to move #' + move;
        } else {
        description = 'Go to game start';
        }
        return (
        <MovesList key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
        </MovesList>
        )
    })

    const calculateWinner = (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ]

        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null
    }

    return (
        <Container>
            <Wrapper>
                <GameBoard xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} calculateWinner={calculateWinner}/>

                <MovesHistory>
                    <Moves> {moves} </Moves>
                </MovesHistory>
            </Wrapper>
        </Container>
    )
}

export default Game
