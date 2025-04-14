import styled from '@emotion/styled'
import { Button, Input } from '../../../shared/ui'
import { useCreateTableForm } from '../model/useCreateTableForm'
import { INPUT_FIELDS, LOCATION_OPTIONS } from '../lib/constants'

export const CreateTableForm = () => {
  const { formValues, handleChange, handleSubmit } = useCreateTableForm()

  return (
    <FormWrapperStyled>
      <FormStyled onSubmit={handleSubmit}>
        {INPUT_FIELDS.map(({ name, placeholder }) => (
          <Input
            key={name}
            name={name}
            placeholder={placeholder}
            value={formValues[name]}
            onChange={handleChange}
          />
        ))}

        <select
          name="fourthCol"
          id="fourthCol"
          value={formValues.fourthCol}
          onChange={handleChange}
        >
          {LOCATION_OPTIONS.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
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
