import React, { useState } from 'react'

import { Grid, Rating } from '@mui/material'

import NewFoodEntryDialog from './NewFoodEntryDialog'
import { HeaderWithAction } from '../components/HeaderWithAction'
import { SimpleTable } from '../components/Tables'

const Home = () => {
  const [newDialogOpen, setNewDialogOpen] = useState<boolean>(false)

  return (
    <>
      <HeaderWithAction text="Home" onClick={() => setNewDialogOpen(true)} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SimpleTable
            columns={[
              {
                label: 'Name',
                name: 'name',
                options: {
                  filterOptions: { fullWidth: true },
                },
              },
              {
                label: 'Restaurant Name',
                name: 'restaurantName',
              },
              {
                label: 'Cuisine',
                name: 'cuisine',
              },
              { label: 'Date', name: 'date' },
              {
                label: 'Rating',
                name: 'rating',
                options: {
                  customBodyRender: (value) => (
                    <Rating disabled value={value} />
                  ),
                },
              },
              {
                label: 'Notes',
                name: 'notes',
              },
            ]}
            data={[
              {
                name: 'Spaghetti',
                restaurantName: 'Charlie Gittos',
                rating: 5,
                cuisine: 'Italian',
                date: new Date().toLocaleDateString(),
                notes: 'Sweet sauce. Huge portion with homemade noodles.',
              },
              {
                name: 'Bangkok Noodle',
                restaurantName: 'Pearl Cafe',
                rating: 5,
                cuisine: 'Thai',
                date: new Date().toLocaleDateString(),
                notes:
                  'Can get very spicy. Crunchy vegetables with yellow curry rice noodles.',
              },
              {
                name: 'BBQ Chicken Fried Rice',
                restaurantName: 'Pearl Cafe',
                rating: 5,
                cuisine: 'Thai',
                date: new Date().toLocaleDateString(),
                notes: 'Lots of chicken in dish',
              },
              {
                name: 'Blue crab Dip',
                restaurantName: 'Olive + Oak',
                rating: 5,
                cuisine: 'America',
                date: new Date().toLocaleDateString(),
                notes: 'Comes with small breads for dipping',
              },
              {
                name: 'Pad Thai',
                restaurantName: 'Zen Thai',
                rating: 4,
                cuisine: 'Thai',
                date: new Date().toLocaleDateString(),
                notes: 'More sweet than other Thai Restaurants',
              },
              {
                name: 'Double Cheese Burger',
                restaurantName: 'McDonald',
                rating: 3,
                cuisine: 'America',
                date: new Date().toLocaleDateString(),
                notes: 'Nothing special',
              },
              {
                name: 'Fiama Fafalda',
                restaurantName: 'Katies Pizza & Pasta',
                rating: 3,
                cuisine: 'Italian',
                date: '8/1/2023',
                notes: 'Very spicy red sauce.',
              },
            ]}
            options={{
              print: false,
              download: false,
              viewColumns: false,
              filterType: 'multiselect',
              rowsPerPage: 25,
              rowsPerPageOptions: [25, 50, 100],
            }}
            title="Food Entries"
          />
        </Grid>
      </Grid>
      {newDialogOpen && (
        <NewFoodEntryDialog open={newDialogOpen} onClose={setNewDialogOpen} />
      )}
    </>
  )
}

export default Home
