import { icons } from 'common/components/Icon'

export interface MenuProps {
  name: string
  icon?: keyof typeof icons
  selected?: boolean
}
