import styled from '@emotion/styled'
import { StoreProvider } from './provider'
import { TableDashboard } from '../widgets'
import { CreateTableFormPopup } from '../features/createTable'

// We could add router. But in this case I think its unnecessary because we don't use routing in this project.
// ps: unless we would want to include 404 page.
export const App = () => {
  return (
    <StoreProvider>
      <ContainerStyled>
        <InnerStyled>
          <ButtonWrapperStyled>
            <CreateTableFormPopup />
          </ButtonWrapperStyled>
          <TableDashboard />
        </InnerStyled>
      </ContainerStyled>
    </StoreProvider>
  )
}

const ContainerStyled = styled('div')`
  margin: 0 auto;
  padding: 20px 0;
  max-width: 1920px;
  min-height: 100vh;
`

const InnerStyled = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 68px;
  height: 100%;
  padding: 0 8px;
`

const ButtonWrapperStyled = styled('div')`
  width: fit-content;
  flex-shrink: 0;
  flex-grow: 0;
`
