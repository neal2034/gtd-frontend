// form
import { FormProvider as Form, UseFormReturn } from 'react-hook-form'

interface Props {
  children: React.ReactNode
  methods: UseFormReturn<any>
  onSubmit?: VoidFunction
}
export default function FormProvider({ children, methods, onSubmit }: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  )
}
