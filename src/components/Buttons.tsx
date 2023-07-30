import React from 'react'

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'

type ButtonBaseProps = Pick<MuiButtonProps, 'onClick'>

export interface ButtonProps extends ButtonBaseProps {
  label?: string
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button = ({ label, onClick }: ButtonProps) => (
  <MuiButton variant="contained" onClick={onClick}>
    {label}
  </MuiButton>
)

export const SubmitButton = () => (
  <MuiButton variant="contained">Submit</MuiButton>
)

export const BackButton = ({ onClick }: ButtonProps) => (
  <MuiButton color="inherit" variant="contained" onClick={onClick}>
    Back
  </MuiButton>
)

export const CancelButton = ({ onClick }: ButtonProps) => (
  <MuiButton color="secondary" variant="contained" onClick={onClick}>
    Cancel
  </MuiButton>
)

Button.defaultProps = {}

SubmitButton.defaultProps = {}

BackButton.defaultProps = {}

CancelButton.defaultProps = {}
