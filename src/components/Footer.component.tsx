import React, { FC, ReactElement } from 'react'

import { Grid, Typography } from '@mui/material'

const Footer: FC = (): ReactElement => (
  <Grid container alignItems="center" direction="column">
    <Grid item xs={12}>
      <Typography align="center" color="textSecondary" variant="body2">
        Copyright © {new Date().getFullYear()} Food Journal. All Rights
        Reserved.
      </Typography>
    </Grid>
  </Grid>
)

export default Footer
