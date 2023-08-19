import React from 'react'

import HomeIcon from '@mui/icons-material/Home'
import {
  Box,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'

export interface DrawerProps {
  onClose: (value: boolean) => void
  open: boolean
}

export const Drawer = ({ open, onClose }: DrawerProps) => {
  const drawerWidth = 240

  const drawerItems: { icon: React.JSX.Element; path: string; text: string }[] =
    [
      {
        icon: <HomeIcon />,
        text: 'Home',
        path: '/',
      },
    ]

  return (
    <MuiDrawer
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
      onClose={onClose}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {drawerItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component="a" href={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </MuiDrawer>
  )
}

Drawer.defaultProps = {}
