import React from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'
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
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.title}
                element={route.component}
                path={route.path}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}
export default App
