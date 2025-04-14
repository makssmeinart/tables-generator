import styled from '@emotion/styled'
import { Button, Popover, Portal } from '../../../shared/ui'
import { CreateTableForm } from './CreateTableForm'

export const CreateTableFormPopup = () => {
  return (
    <Popover position="bottom-left">
      <Popover.Trigger>
        <ButtonWrapperStyled>
          <Button>Click me</Button>
        </ButtonWrapperStyled>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <CreateTableForm />
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover>
  )
}

const ButtonWrapperStyled = styled('div')`
  width: fit-content;
  flex-shrink: 0;
  flex-grow: 0;
`
