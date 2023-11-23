import palette from './../palette'

const checkbox = {
  MuiCheckbox: {
    styleOverrides: {
      root: {
        '& .MuiSvgIcon-root': {
          fill: `rgba(0, 0, 0, 0.54)`,
        },
        '& p, &.Mui-checked': {
          '& .MuiSvgIcon-root': {
            fill: palette.light.primary.main,
          },
        },
        '& p, &.MuiCheckbox-indeterminate': {
          '& .MuiSvgIcon-root': {
            fill: palette.light.primary.main,
          },
        },
      },
      checked: {},
    },
  },
}

export default checkbox
