import React from "react"
import styled from "styled-components"

const StyledLabel = styled.label`

`

const Label = ({children, ...props}) => {
  return (
    <StyledLabel {...props}>{children}</StyledLabel>
  )
}

export {Label};