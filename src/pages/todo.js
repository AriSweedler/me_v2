import React, { useState } from "react"
import styled from 'styled-components';
import TextLayout from '../components/Layout/TextLayout';

const StyledTodo = styled.div`
  background: ${props => props.color};
  transition: background-color 0.5s cubic-bezier(.52,2.5,.55,2.95) ${props => props.index * 100}ms;
  display: inline-block;
`

const StyledButton = styled.button`
  margin-bottom: 1em;
  border-radius: 1em;
  border: none;
`

function getColor(){
  return "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' +
             (65 + 10 * Math.random()) + '%)'
}

const todoItems = [
  'Add support for Emojis',
]

const TodoPage = () => {
  // Define a state variable named 'colorsState'. It's an array with the same
  // length as todoItems, and each entry is a color
  const [colorsState, setColorsState] = useState(todoItems.map(getColor));
  const setColorsStateWrapper = () => {
    setColorsState(todoItems.map(getColor));
  }

  let children = [];
  for (let i = 0; i < todoItems.length; i++){
    let todoItem = <StyledTodo index={i} color={colorsState[i]}>{todoItems[i]}</StyledTodo>
    let listItem = (<li key={i}>{todoItem}</li>);
    children.push(listItem);
  }

  return (
    <TextLayout overrideWidth='90%'>
      <StyledButton onClick={setColorsStateWrapper}>Change colors</StyledButton>
      <h1>TODOs:</h1>
      <ul>{children}</ul>
    </TextLayout>
  );
}

export default TodoPage
