import React from 'react'

import CloseIcon from '@mui/icons-material/Close'
import {
  DialogProps as MuiDialogProps,
  Dialog as MuiDialogBox,
  DialogTitle,
  DialogActions,
  DialogContent,
  IconButton,
} from '@mui/material'

import { Button, CancelButton } from './button.component'

type DialogBaseProps = Pick<MuiDialogProps, 'open' | 'onClose'>

export interface DialogBoxProps extends DialogBaseProps {
  children: JSX.Element
  onClose: (open: boolean) => void
  open: boolean
  title: string
}

export const DialogBox = ({
  title,
  children,
  open,
  onClose,
}: DialogBoxProps) => {
  const handleClose = () => {
    onClose(false)
  }

  return (
    <MuiDialogBox
      fullWidth={true}
      maxWidth="sm"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {title}
        <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers={true}>{children}</DialogContent>
      <DialogActions>
        <CancelButton onClick={handleClose} />
        <Button label="Submit" onClick={() => {}} />
      </DialogActions>
    </MuiDialogBox>
  )
}

DialogBox.defaultProps = {
  open: false,
}
