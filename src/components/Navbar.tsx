import React, { useState } from 'react'

import AccountCircle from '@mui/icons-material/AccountCircle'
import Logout from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import Settings from '@mui/icons-material/Settings'
import {
  AppBar as MuiAppBar,
  Box,
  IconButton,
  ListItemAvatar,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { Drawer } from './Drawer'

export interface NavbarProps {
  applicationName: string
}

export const Navbar = ({ applicationName }: NavbarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
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
        position="static"
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
          <Menu
            keepMounted
            anchorEl={anchorEl}
            id="account-menu"
            open={!!anchorEl}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </MuiAppBar>
      {drawerOpen && <Drawer open={drawerOpen} />}
    </Box>
  )
}

Navbar.defaultProps = {}
