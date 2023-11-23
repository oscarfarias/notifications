import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from '@mui/material'
interface ModalProps {
  isOpen: boolean
  children?: React.ReactNode
  cancelText?: string
  confirmText?: string
  title?: string
  onConfirm?: () => void
  onCancel?: () => void
  actions?: React.ReactNode
}

export default function Modal({
  isOpen,
  title = ``,
  children = null,
  cancelText = `CANCELAR`,
  confirmText = `ACEPTAR`,
  onConfirm = () => null,
  onCancel = () => null,
  actions,
}: ModalProps): JSX.Element | null {
  return isOpen ? (
    <Dialog open fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ flexDirection: `column` }}>{children}</DialogContent>
      <DialogActions sx={{ justifyContent: `center` }}>
        {actions ? (
          actions
        ) : (
          <>
            <Button color="error" disableRipple onClick={onConfirm}>
              {confirmText}
            </Button>
            <Button variant="outlined" onClick={onCancel}>
              {cancelText}
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  ) : null
}
