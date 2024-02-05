import { TextField, TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface Props {
  name: string
}

type RHTTextField = Props & TextFieldProps

export default function RHFTextField({ name, ...rest }: RHTTextField) {
  const { control, clearErrors } = useFormContext()
  const onFocus = () => {
    clearErrors()
  }
  return (
    <Controller
      name={name}
      defaultValue={''}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} fullWidth error={!!error} onFocus={onFocus} helperText={error?.message} {...rest} />
      )}
    />
  )
}
