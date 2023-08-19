import React, { Dispatch, FC, SetStateAction } from 'react'

import { Autocomplete, TextField, TextFieldProps } from '@mui/material'

type StandardTextFieldBaseProps = Pick<
  TextFieldProps,
  'label' | 'value' | 'id' | 'fullWidth' | 'multiline' | 'placeholder' | 'rows'
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
      variant="outlined"
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

StandardTextField.defaultProps = {
  fullWidth: true,
}

interface IAutocompleteTextField {
  id: string
  label: string
  onChange: (value: string | null) => void
  options: string[]
  value: string | null
}

export const AutocompleteTextField: FC<IAutocompleteTextField> = (props) => {
  return (
    <Autocomplete
      filterSelectedOptions
      id={props.id}
      options={props.options}
      renderInput={(params) => (
        <TextField {...params} label={props.label} variant="outlined" />
      )}
      value={props.value}
      onChange={(event, newValue: string | null) => {
        props.onChange(newValue)
      }}
    />
  )
}
