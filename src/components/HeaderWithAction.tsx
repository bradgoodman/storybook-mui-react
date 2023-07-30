import React from 'react'

import { Box, Stack, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import { Button } from './Buttons'

export interface HeaderWithActionProps {
  loading: boolean
  onClick: () => void
  text: string
}

export const HeaderWithAction = ({
  text,
  loading,
  onClick,
}: HeaderWithActionProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Stack direction="row" spacing={1}>
        <Typography variant="h4">{text}</Typography>
        {loading && <CircularProgress />}
      </Stack>
      <Button label="New Entry" onClick={onClick} />
    </Box>
  )
}

HeaderWithAction.defaultProps = {
  loading: false,
}
