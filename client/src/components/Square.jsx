import React from 'react'
import styled from 'styled-components'

const Squares = styled.button`
    width: 15rem;
    height: 15rem;
    background-color: #414141;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    margin: 1rem;

    &:hover {
        cursor: pointer;
        background-color: #737171;
    }
`

const Text = styled.p`
    color: #fff;
    font-size: 10rem;
    font-weight: 700;
`

const Square = ({ value, sqaureClick }) => {


  return (
    <>
        <Squares onClick={ sqaureClick }> 
            <Text> { value } </Text>
        </Squares>
    </>
  )
}

export default Square