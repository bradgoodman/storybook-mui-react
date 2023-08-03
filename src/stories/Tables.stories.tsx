import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { SimpleTable } from '../components/Tables'

const Tables: Meta<typeof SimpleTable> = {
  title: 'Components/Tables',
  component: SimpleTable,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
  },
}

export default Tables
type Story = StoryObj<typeof SimpleTable>

export const Standard: Story = {
  render: (args) => {
    return <SimpleTable {...args} />
  },
  args: {
    title: 'Table Title',
    data: [
      { name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
      {
        name: 'John Walsh',
        company: 'Test Corp',
        city: 'Hartford',
        state: 'CT',
      },
      { name: 'Bob Herm', company: 'Test Corp', city: 'Tampa', state: 'FL' },
      {
        name: 'James Houston',
        company: 'Test Corp',
        city: 'Dallas',
        state: 'TX',
      },
    ],
    columns: [
      {
        name: 'name',
        label: 'Name',
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: 'company',
        label: 'Company',
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: 'city',
        label: 'City',
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: 'state',
        label: 'State',
        options: {
          filter: true,
          sort: false,
        },
      },
    ],
    options: {},
  },
}
