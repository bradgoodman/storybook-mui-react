import React, { ReactElement } from 'react'

import Home from './screens/Home'

interface Route {
  component: ReactElement
  enabled: boolean
  path: string
  title: string
}

export const routes: Route[] = [
  {
    title: 'Home',
    path: '/',
    enabled: true,
    component: <Home />,
  },
]
