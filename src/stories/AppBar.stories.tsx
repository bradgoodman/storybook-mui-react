import React from 'react'

import { Navbar } from '../components/Navbar'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
}

export const ApplicationBar = () => {
  return <Navbar applicationName="Application Name" />
}
