// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { TextField, TextFieldProps } from '@mui/material'

// ----------------------------------------------------------------------

interface IProps {
  name: string
  children: any
}

export default function RHFSelect({ name, children, ...other }: IProps & TextFieldProps) {
  const { control, clearErrors } = useFormContext()
  const onFocus = () => clearErrors()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          onFocus={onFocus}
          SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  )
}
