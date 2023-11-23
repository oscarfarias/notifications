import palette from './../palette'

const accordion = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        width: `100%`,
        '&.Mui-expanded': {
          backgroundColor: palette.light.primary.main,
        },
        backgroundColor: palette.light.primary.main,
      },
    },
    defaultProps: {
      elevation: 0,
      disableGutters: true,
      TransitionProps: {
        timeout: 0,
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        '&.Mui-expanded': {
          backgroundColor: palette.light.primary.main,
        },
        backgroundColor: palette.light.primary.main,
      },
      content: {
        backgroundColor: palette.light.primary.main,

        '&.Mui-expanded': {
          backgroundColor: palette.light.primary.main,
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        flexDirection: `column`,
        padding: 0,
        backgroundColor: palette.light.primary.main,
      },
    },
  },
}

export default accordion
