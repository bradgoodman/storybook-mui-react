import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import {
  BackButton,
  Button,
  CancelButton,
  SubmitButton,
} from '../components/Buttons'

const Buttons: Meta<typeof Button> = {
  title: 'Components/Buttons',
  component: Button,
  tags: ['autodocs'],
}

export default Buttons
type Story = StoryObj<typeof Button>

export const Submit: Story = {
  render: () => {
    return <SubmitButton />
  },
}

export const Back: Story = {
  render: () => {
    return <BackButton onClick={() => {}} />
  },
}

export const Cancel: Story = {
  render: () => {
    return <CancelButton onClick={() => {}} />
  },
}
