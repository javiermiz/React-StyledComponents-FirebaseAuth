import React from "react"
import styled from "styled-components";

const StyledForm = styled.form`

`

const Form = ({onSubmit, children}) => {
  return(
    <StyledForm onSubmit={onSubmit}>
      {children}
    </StyledForm>
  )
}

export { Form }