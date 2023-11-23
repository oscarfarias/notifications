import type { FieldValues, Control } from 'react-hook-form'
export interface ValidatorProps {
  errors: any
  control: Control<FieldValues>
}
