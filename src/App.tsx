import React from 'react'

import { Box } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AppBar } from './components/appbar.component'
import { routes as appRoutes } from './Routes'

const App = () => (
  <>
    <AppBar applicationName="Food Review" />
    <Router>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: 1,
        }}
      >
        <Routes>
          {appRoutes.map((route) => (
            <Route
              key={route.title}
              element={route.component}
              path={route.path}
            />
          ))}
        </Routes>
      </Box>
    </Router>
  </>
)

export default App
