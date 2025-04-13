import { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../app/store/mainStore'
import { createTable } from '../../../entities/table/model/table.slice'
import { usePopoverContext } from '../../../shared/ui/Popover'

export type CreateTableFormState = {
  firstCol: string
  secondCol: string
  thirdCol: string
  fourthCol: string
}

export const useCreateTableForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { close } = usePopoverContext()

  const [formValues, setFormValues] = useState<CreateTableFormState>({
    firstCol: '',
    secondCol: '',
    thirdCol: '',
    fourthCol: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { firstCol, secondCol, thirdCol, fourthCol } = formValues

    const columns = [
      { field: firstCol.toLowerCase(), label: firstCol },
      { field: secondCol.toLowerCase(), label: secondCol },
      { field: thirdCol.toLowerCase(), label: thirdCol },
      { field: fourthCol.toLowerCase(), label: fourthCol },
    ]

    dispatch(createTable({ columns }))
    close()
  }

  return {
    formValues,
    handleChange,
    handleSubmit,
  }
}
