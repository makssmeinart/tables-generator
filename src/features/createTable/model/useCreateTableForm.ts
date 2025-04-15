import { useState, FormEvent } from 'react'
import { createTable } from '../../../entities/table/model/table.slice'
import { usePopoverContext } from '../../../shared/ui/Popover'
import { useAppDispatch } from '../../../shared/lib/store/redux'

import { LOCATION_SELECT_OPTIONS } from '../../../shared/constants/table'

type SelectOption = (typeof LOCATION_SELECT_OPTIONS)[number]

export type CreateTableFormState = {
  firstCol: string
  secondCol: string
  thirdCol: string
  fourthCol: SelectOption
}

const hasDuplicates = (values: string[]) =>
  new Set(values.map((value) => value.toLowerCase())).size !== values.length

export const useCreateTableForm = () => {
  const dispatch = useAppDispatch()
  const { close } = usePopoverContext()

  const [formValues, setFormValues] = useState<CreateTableFormState>({
    firstCol: '',
    secondCol: '',
    thirdCol: '',
    fourthCol: 'Country',
  })

  const [error, setError] = useState<string | null>(null)

  const handleChange = (formField: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [formField]: value }))
    setError(null)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { firstCol, secondCol, thirdCol, fourthCol } = formValues
    const values = [firstCol, secondCol, thirdCol, fourthCol]

    if (hasDuplicates(values)) {
      setError('All column names must be unique.')
      return
    }

    const columns = [
      { field: firstCol.toLowerCase(), label: firstCol },
      { field: secondCol.toLowerCase(), label: secondCol },
      { field: thirdCol.toLowerCase(), label: thirdCol },
      {
        field: fourthCol.toLowerCase(),
        label: fourthCol,
        interactiveIcon: {
          label: 'copy',
        },
      },
    ]

    dispatch(createTable({ columns }))
    close()
  }

  return {
    formValues,
    handleChange,
    handleSubmit,
    error,
  }
}
