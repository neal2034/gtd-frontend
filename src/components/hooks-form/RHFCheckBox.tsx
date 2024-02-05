import { Checkbox, FormControlLabel, FormControlLabelProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface RHFCheckBoxProps extends Omit<FormControlLabelProps, 'control'> {
  name: string
}

export default function RHFCheckBox({ name, ...rest }: RHFCheckBoxProps) {
  const { control } = useFormContext()
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
      {...rest}
    />
  )
}
