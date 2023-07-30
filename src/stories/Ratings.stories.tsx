import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Rating } from '../components/Rating'

const Ratings: Meta<typeof Rating> = {
  title: 'Components/Ratings',
  component: Rating,
  argTypes: {
    label: {
      control: 'text',
    },
    rating: {
      control: {
        type: 'number',
        min: 1,
        max: 5,
      },
    },
  },
}

export default Ratings
type Story = StoryObj<typeof Rating>

export const Standard: Story = {
  render: (args) => {
    return <Rating {...args} />
  },
  args: {
    label: 'Rating',
    rating: 3,
  },
}
