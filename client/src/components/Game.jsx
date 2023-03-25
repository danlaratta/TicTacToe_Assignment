import React, { useState } from 'react'
import styled from 'styled-components/macro'
import GameBoard from './GameBoard'

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    
`

const HistoryContainer = styled.div`
    margin-top: 18rem;
    height: 51rem;
    display: flex;
    flex-direction: column;
    background-color: #000;
    padding: 2rem;
    border-radius: 1rem;
`

const MovesHistory = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
    border-radius: 1rem;
`

const Title = styled.h1`
   color: #fff;
   padding: 0;
   margin: 0;
`

const Moves = styled.ol`
    padding: 0;
`

const MovesList = styled.li`
    margin: 1.5rem 0rem;
`

const MoveBtn = styled.button`
    padding: 0.5rem 1rem;
    background-color: #737171;
    border: none;
    color: #fff;
    font-weight: 700;
    border-radius: 0.5rem;

    &:hover {
        cursor: pointer;
        background-color: #414141;
    }
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
            description = 'Move number ' + move;
        } 
        else {
            description = 'Return To Start';
        }
        return (
        <MovesList key={move}>
            <MoveBtn onClick={() => jumpTo(move)}> { description } </MoveBtn>
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
                <GameBoard xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} calculateWinner={calculateWinner} history={history} />

                <HistoryContainer>
                    <Title> Game History </Title>

                    <MovesHistory>
                        <Moves> {moves} </Moves>
                    </MovesHistory>
                </HistoryContainer>
            </Wrapper>
        </Container>
    )
}

export default Game
