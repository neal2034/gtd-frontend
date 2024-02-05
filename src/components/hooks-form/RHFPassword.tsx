import Iconify from '@components/Iconify'
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'


interface Props {
  name: string
}
type RHFPasswordProps = Props & TextFieldProps
export default function RHFPassword(props: RHFPasswordProps) {
  const { control, clearErrors } = useFormContext()
  const { name, ...rest } = props
  const [showPassword, setShowPassword] = useState(false)
  const onFocus = () => clearErrors()
  return (
    <Controller
      name={name}
      defaultValue={''}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          type={showPassword ? 'text' : 'password'}
          {...field}
          fullWidth
          onFocus={onFocus}
          error={!!error}
          helperText={error?.message}
          {...rest}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    ></Controller>
  )
}
