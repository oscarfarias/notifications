const table = {
  MuiTableCell: {
    styleOverrides: {
      head: {
        color: `black`,
        fontSize: 18,
        fontWeight: `700`,
        lineHeight: `1.5rem`,
        letterSpacing: 0,
      },
      root: {
        color: `black`,
        display: `table-cell`,
        padding: `16px`,
        fontSize: `14px`,
        textAlign: `left`,
        fontWeight: `400`,
        lineHeight: `20px`,
        verticalAlign: `inherit`,
      },
      body: {
        color: `black`,
      },
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      input: { display: `none` },
    },
  },
}
export default table
