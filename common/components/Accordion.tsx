import Accordion from '@mui/material/Accordion'
import AccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import AccordionDetails, {
  AccordionDetailsProps,
} from '@mui/material/AccordionDetails'
import Icon, { icons } from './Icon'
import type { AccordionProps } from '@mui/material/Accordion'
import { makeStyles } from '@mui/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const useStyles = makeStyles(() => {
  const { palette } = useTheme()
  return {
    menu: {
      width: `100%`,
      '&.Mui-expanded': {
        backgroundColor: palette.primary.main,
      },
      '&:hover': {
        color: palette.common.white,
      },
      '& p, & .MuiAccordionSummary-expandIcon': {
        color: palette.common.white,
      },
      '& p, & .MuiSvgIcon-root': {
        fill: palette.common.white,
      },
      backgroundColor: palette.primary.main,
      color: palette.common.white,
    },
    default: {
      width: `100%`,
      '&.Mui-expanded': {
        backgroundColor: palette.common.white,
      },
      '&:hover': {
        color: `black`,
      },
      '& p, & .MuiAccordionSummary-content': {
        backgroundColor: palette.common.white,
      },

      color: `black`,
      backgroundColor: palette.common.white,
    },
  }
})

interface ExtendedAccordionProps
  extends Omit<AccordionProps, `title` | `expandIcon` | `variant`> {
  title: string | JSX.Element
  startIcon?: keyof typeof icons
  startIconColor?: string
  startIconOnClick?: () => void
  endIcon?: keyof typeof icons
  endIconColor?: string
  endIconOnClick?: () => void
  variant?: keyof ReturnType<typeof useStyles>
  accordionSummaryProps?: AccordionSummaryProps
  accordionDetailsProps?: AccordionDetailsProps
}
export default function AccordionWrapper({
  children,
  title,
  startIcon,
  startIconColor = `common.white`,
  startIconOnClick,
  endIcon,
  endIconColor = `common.white`,
  endIconOnClick,
  variant = `default`,
  accordionSummaryProps: AccordionSummaryProps,
  ...props
}: ExtendedAccordionProps): JSX.Element {
  const classes = useStyles()
  const className = classes[variant]

  const startIconComponent = startIcon ? (
    <Icon
      icon={startIcon}
      sx={{ color: startIconColor, marginRight: 2 }}
      onClick={
        startIconOnClick
          ? (e) => {
              e.stopPropagation()
              startIconOnClick?.()
            }
          : undefined
      }
    />
  ) : null

  const endIconComponent = endIcon ? (
    <Icon
      icon={endIcon}
      sx={{ color: endIconColor, marginLeft: 2 }}
      onClick={
        endIconOnClick
          ? (e) => {
              e.stopPropagation()
              endIconOnClick?.()
            }
          : undefined
      }
    />
  ) : null

  return (
    <Accordion defaultExpanded className={className} {...props}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="content"
        id="panel"
        className={className}
        {...AccordionSummaryProps}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          flex={1}
        >
          {startIconComponent}
          <Stack
            direction="row"
            justifyContent="space-between"
            flex={1}
            alignItems="center"
          >
            {title}
            {endIconComponent}
          </Stack>
        </Stack>
      </AccordionSummary>
      <AccordionDetails className={className}>{children}</AccordionDetails>
    </Accordion>
  )
}
