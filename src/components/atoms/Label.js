import React from "react"
import styled from "styled-components"

const StyledLabel = styled.label`
  font-size: 20px;
`

const Label = ({ children }) => {
  return (
    <StyledLabel>{children}</StyledLabel>
  )
}

export {Label};