import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Squares = styled(motion.button)`
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
        background-color:  ${props => props.hoverColor};
        border: 0.4rem solid #fff;
        cursor: ${props => props.disabled === 1 ? "default" : "pointer"};
    }
`

const Text = styled(motion.p)`
    color: #fff;
    font-size: 10rem;
    font-weight: 700;
`

// variants
const HoverVariants = {
    nothing: {
      scale: 1
    },

    hover: {
        scale: 0.8,
        transition: {
            duration: 0.7,
            repeat: Infinity,
            repeatType: 'mirror',
        }
    }
  };

const Square = ({ value, sqaureClick }) => {
    const [squareColor, setSquareColor] = useState('')
    const [hoverColor, setHoverColor] = useState('')
    const [disabled, setDisabled] = useState(0)

    useEffect(() => {
        if(value === 'X') {
            setSquareColor('#ff680a')
            setHoverColor('rbga(0, 0, 0, 0)')
            setDisabled(1)
        }
        else if(value === 'O') {
            setSquareColor('#08aace')
            setHoverColor('rbga(0, 0, 0, 0)')
            setDisabled(1)
        }
        else {
            setSquareColor('#414141')
            setHoverColor('#737171')
            setDisabled(0)
        }

    }, [value, squareColor, hoverColor])

  return (
    <>
        <Squares 
            onClick={ sqaureClick } 
            squareColor={squareColor} 
            hoverColor={hoverColor}
            disabled={disabled}
            initial="nothing" 
            whileHover="hover" 
            animate="nothing" 
        > 
            <Text variants={HoverVariants}> { value } </Text>
        </Squares>
    </>
  )
}

export default Square