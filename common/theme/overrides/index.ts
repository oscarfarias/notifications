import { merge } from 'lodash'
import button from './button'
import accordion from './accordion'
import input from './input'
import checkbox from './checkbox'
import formControlLabel from './formControlLabel'
import typography from '../typography'
import chip from './chip'
import table from './table'
import listItem from './listitem'
export default function ComponentsOverrides(): Record<string, any> {
  return merge({
    ...table,
    ...accordion,
    ...input,
    ...checkbox,
    ...formControlLabel,
    ...typography,
    ...chip,
    ...button,
    ...listItem,
  })
}
