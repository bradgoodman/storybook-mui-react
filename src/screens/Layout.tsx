import React, { FC, ReactNode } from 'react'

import { Box } from '@mui/material'

import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { SnackBarProvider } from '../contexts/SnackBarContext'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SnackBarProvider>
        <Navbar applicationName="Food Journal" />
        <Box sx={{ width: '100vw', height: '95vh', padding: 1 }}>
          {children}
        </Box>
        <Footer />
      </SnackBarProvider>
    </>
  )
}

export default Layout
