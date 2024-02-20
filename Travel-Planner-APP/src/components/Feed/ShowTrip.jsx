import React from 'react'
import styled from 'styled-components'
export default function ShowTrip({setAddShowTrip}) {
  return (
    <Container>
      <h1>jkbv</h1>
      <FloatingActionButton onClick={()=>setAddShowTrip("add")}>+</FloatingActionButton>
    </Container>
  )
}
const Container = styled.div`
`
const FloatingActionButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #61dafb;
  color: white;
  padding: 15px;
  border: none;
  font-size: 1.5em;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #4e0eff;
  }
`;