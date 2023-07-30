import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { StandardTextField } from '../components/textfield.component'

const TextFields: Meta<typeof StandardTextField> = {
  title: 'Components/TextFields',
  tags: ['autodocs'],
  component: StandardTextField,
  argTypes: {
    label: {
      control: 'text',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
}

export default TextFields
type Story = StoryObj<typeof StandardTextField>

export const StandardText: Story = {
  render: (args) => {
    return <StandardTextField {...args} id="textfield-1" />
  },
  args: {
    label: 'Text Field 1',
    fullWidth: true,
  },
}