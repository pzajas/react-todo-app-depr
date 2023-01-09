import styled from "styled-components"

const StyledActionTextContainer = styled.div`
  height: 3.7rem;
  display: grid;
  justify-content: center;
  background-color: #262626;
  margin-bottom: 0.5rem;
`

const TodoHeader = () => {
  return (
    <>
      <StyledActionTextContainer>No action was performed</StyledActionTextContainer>
    </>
  )
}

export default TodoHeader
