import React from 'react'

import { AppBar } from '../components/appbar.component'

export default {
  title: 'Components/AppBar',
  component: AppBar,
  tags: ['autodocs'],
}

export const ApplicationBar = () => {
  return <AppBar applicationName="Application Name" />
}
