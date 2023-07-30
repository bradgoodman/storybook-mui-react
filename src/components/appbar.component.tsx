import React, { useState } from 'react'

import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar as MuiAppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'

import { Drawer } from './Drawer.component'
import { AccountMenu } from './Menu.component'

export interface AppBarProps {
  applicationName: string
}

export const AppBar = ({ applicationName }: AppBarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar
        enableColorOnDark
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Tooltip title="Menu">
            <IconButton
              aria-label="menu"
              color="inherit"
              edge="start"
              size="large"
              sx={{ mr: 2 }}
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
            {applicationName}
          </Typography>
          <Tooltip title="Account settings">
            <IconButton color="inherit" size="small" onClick={handleClick}>
              <AccountCircle />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </MuiAppBar>
      {drawerOpen && <Drawer open={drawerOpen} />}
      <AccountMenu
        anchorEl={anchorEl}
        handleClick={handleClick}
        handleClose={handleClose}
        open={open}
      />
    </Box>
  )
}

AppBar.defaultProps = {}
