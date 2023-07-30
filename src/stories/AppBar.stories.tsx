import React from 'react'

import { Navbar } from '../components/Navbar.component'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
}

export const ApplicationBar = () => {
  return <Navbar applicationName="Application Name" />
}
