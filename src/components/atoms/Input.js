import React from "react"
import styled from "styled-components";

const StyledInput = styled.input`
  
`

const Input = ({type, required}) => {
  return (
    <input type={"text" || type} required={required} />
  )
}

export {Input};