import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { HeaderWithAction } from '../components/HeaderWithAction.component'

const Headers: Meta<typeof HeaderWithAction> = {
  title: 'Components/Headers',
  tags: ['autodocs'],
  component: HeaderWithAction,
  argTypes: {
    text: {
      control: 'text',
    },
    loading: {
      control: 'boolean',
    },
  },
}

export default Headers
type Story = StoryObj<typeof HeaderWithAction>

export const Primary: Story = {
  render: (args) => {
    const { text, loading } = args

    return (
      <HeaderWithAction
        {...args}
        loading={loading}
        text={text}
        onClick={() => {}}
      />
    )
  },
  args: {
    text: 'Home',
    loading: true,
  },
}
