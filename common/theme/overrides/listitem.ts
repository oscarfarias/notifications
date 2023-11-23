import gradients from '../gradients'

const listItem = {
  MuiListItemButton: {
    defaultProps: {},
    styleOverrides: {
      root: {
        borderRadius: `4px`,
        '&:hover': {
          background: `#4F4F52`,
          borderRadius: `4px`,
        },

        '&.Mui-selected': {
          background: gradients[0],
          borderRadius: `4px`,
        },
      },
    },
  },
}

export default listItem
