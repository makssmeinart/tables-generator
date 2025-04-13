import styled from '@emotion/styled'
import { Button, Input } from '../../../shared/ui'
import { useCreateTableForm } from '../model/useCreateTableForm'

export type Column = {
  field: string
  label: React.ReactNode | string
}

export const CreateTableForm = () => {
  const { formValues, handleChange, handleSubmit } = useCreateTableForm()

  return (
    <FormWrapperStyled>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          placeholder="First column"
          name="firstCol"
          value={formValues.firstCol}
          onChange={handleChange}
        />
        <Input
          placeholder="Second column"
          name="secondCol"
          value={formValues.secondCol}
          onChange={handleChange}
        />
        <Input
          placeholder="Third column"
          name="thirdCol"
          value={formValues.thirdCol}
          onChange={handleChange}
        />
        <select
          name="fourthCol"
          id="fourthCol"
          value={formValues.fourthCol}
          onChange={handleChange}
        >
          <option value="Country">Country</option>
          <option value="City">City</option>
          <option value="Street">Street</option>
          <option value="Home">Home</option>
        </select>
        <Button type="submit" color="secondary" size="sm" weight="bold">
          ADD
        </Button>
      </FormStyled>
    </FormWrapperStyled>
  )
}

const FormWrapperStyled = styled('div')`
  width: 280px;
  background-color: white;
  padding: 20px 16px;
  border-radius: 4px;
`

const FormStyled = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;

  button:last-child {
    margin-top: 4px;
  }
`
