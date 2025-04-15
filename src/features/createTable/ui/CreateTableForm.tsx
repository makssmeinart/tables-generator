import styled from '@emotion/styled'
import { Button, Input } from '../../../shared/ui'
import { useCreateTableForm } from '../model/useCreateTableForm'
import { Select } from '../../../shared/ui/Select'

import { INPUT_FIELDS } from '../lib/constants'
import { LOCATION_SELECT_OPTIONS } from '../../../shared/constants/table'

export const CreateTableForm = () => {
  const { formValues, error, handleChange, handleSubmit } = useCreateTableForm()

  return (
    <FormWrapperStyled>
      <FormStyled onSubmit={handleSubmit}>
        {INPUT_FIELDS.map(({ field, placeholder }) => (
          <Input
            key={field}
            required
            placeholder={placeholder}
            value={formValues[field]}
            onChange={(e) => handleChange(field, e.target.value)}
          />
        ))}
        <Select
          options={LOCATION_SELECT_OPTIONS}
          value={formValues.fourthCol}
          onChange={handleChange}
        />
        <Button type="submit" color="secondary" size="sm" weight="bold">
          ADD
        </Button>
        {/* TODO - This should be done properly in real case. Just some UX improvements */}
        <ErrorStyled>{error}</ErrorStyled>
      </FormStyled>
    </FormWrapperStyled>
  )
}

const FormWrapperStyled = styled('div')`
  width: 280px;
  background-color: white;
  padding: 20px 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px #00000026;
`

const FormStyled = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;

  button:last-child {
    margin-top: 4px;
  }
`

const ErrorStyled = styled('div')`
  color: #f35a5a;
`
