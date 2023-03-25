import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Squares = styled.button`
    width: 15rem;
    height: 15rem;
    background-color: ${props => props.squareColor};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    margin: 1rem;

    &:hover {
        cursor: pointer;
        background-color:  ${props => props.hoverColor};
    }
`

const Text = styled.p`
    color: #fff;
    font-size: 10rem;
    font-weight: 700;
`

const Square = ({ value, sqaureClick }) => {
    const [squareColor, setSquareColor] = useState('')
    const [hoverColor, setHoverColor] = useState('')
    const [border, setBorder] = useState(0)

    useEffect(() => {
        if(value === 'X') {
            setSquareColor('#ff680a')
            setHoverColor('#cc550c')
            setBorder(1)
        }
        else if(value === 'O') {
            setSquareColor('#08aace')
            setHoverColor('#087a94')
            setBorder(1)
        }
        else {
            setSquareColor('#414141')
            setHoverColor('#737171')
            setBorder(0)
        }

    }, [value, squareColor, hoverColor, border])

  return (
    <>
        <Squares onClick={ sqaureClick } squareColor={squareColor} hoverColor={hoverColor}> 
            <Text> { value } </Text>
        </Squares>
    </>
  )
}

export default Square