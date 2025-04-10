import styled from 'styled-components'
import { MainProviders } from './provider'

export const App = () => {
  return (
    <MainProviders>
      <TablesWrapperStyled>Content</TablesWrapperStyled>
    </MainProviders>
  )
}

const TablesWrapperStyled = styled('div')`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1920px;
  height: 100vh;
  background-color: purple;
`
