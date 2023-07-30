import React from 'react'

import HomeIcon from '@mui/icons-material/Home'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  Toolbar,
} from '@mui/material'

export interface DrawerProps {
  open: boolean
}

export const Drawer = ({ open }: DrawerProps) => {
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
      variant="permanent"
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
