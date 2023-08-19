import React from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { routes as appRoutes } from './Routes'
import Layout from './screens/Layout'
import { themes } from './themes'

const App = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <CssBaseline />
      <Router>
        <Layout>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.title}
                  element={route.component}
                  path={route.path}
                />
              ))}
            </Routes>
          </LocalizationProvider>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}
export default App
