import React from 'react'

import { TextField } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'

import { DialogBox } from '../components/dialogbox.component'

const DialogBoxes: Meta<typeof DialogBox> = {
  title: 'Components/DialogBox',
  component: DialogBox,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    open: {
      control: 'boolean',
    },
  },
}

export default DialogBoxes
type Story = StoryObj<typeof DialogBox>

export const NewDialog: Story = {
  render: (args) => {
    const { title, open } = args

    return (
      <DialogBox {...args} open={open} title={title} onClose={() => {}}>
        <TextField label="Text Field" />
      </DialogBox>
    )
  },
  args: {
    title: 'New Dialog',
    open: true,
  },
}

export const EditDialog: Story = {
  render: (args) => {
    const { title, open } = args

    return (
      <DialogBox {...args} open={open} title={title} onClose={() => {}}>
        <TextField label="Text Field" />
      </DialogBox>
    )
  },
  args: {
    title: 'Edit Dialog',
    open: true,
  },
}
