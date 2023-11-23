import { green, red } from '@mui/material/colors'

const chip = {
  MuiChip: {
    styleOverrides: {
      label: {
        fontWeight: 400,
        fontSize: `13px`,
      },
      colorSuccess: {
        backgroundColor: green[100],
        color: green[900],
      },
      colorError: {
        backgroundColor: red[100],
        color: red[900],
      },
    },
  },
}

export default chip
