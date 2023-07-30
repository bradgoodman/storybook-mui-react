import React, { Dispatch, SetStateAction } from 'react'

import { TextField, TextFieldProps } from '@mui/material'

type StandardTextFieldBaseProps = Pick<
  TextFieldProps,
  'label' | 'value' | 'id' | 'fullWidth'
>

export interface StandardTextFieldProps extends StandardTextFieldBaseProps {
  onChange: Dispatch<SetStateAction<string>>
}

export const StandardTextField = ({
  label,
  id,
  value,
  onChange,
  ...rest
}: StandardTextFieldProps) => {
  return (
    <TextField
      {...rest}
      id={id}
      label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

StandardTextField.defaultProps = {
  fullWidth: true,
}
