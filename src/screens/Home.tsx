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
            ]}
            data={[
              {
                name: 'Spaghetti',
                restaurantName: 'Charlie Gittos',
                rating: 5,
                cuisine: 'Italian',
                date: new Date().toLocaleDateString(),
              },
              {
                name: 'Bangkok Noodle',
                restaurantName: 'Pearl Cafe',
                rating: 5,
                cuisine: 'Thai',
                date: new Date().toLocaleDateString(),
              },
              {
                name: 'BBQ Chicken Fried Rice',
                restaurantName: 'Pearl Cafe',
                rating: 5,
                cuisine: 'Thai',
                date: new Date().toLocaleDateString(),
              },
              {
                name: 'Blue crab Dip',
                restaurantName: 'Olive + Oak',
                rating: 5,
                cuisine: 'America',
                date: new Date().toLocaleDateString(),
              },
              {
                name: 'Pad Thai',
                restaurantName: 'Zen Thai',
                rating: 4,
                cuisine: 'Thai',
                date: new Date().toLocaleDateString(),
              },
              {
                name: 'Double Cheese Burger',
                restaurantName: 'McDonald',
                rating: 3,
                cuisine: 'America',
                date: new Date().toLocaleDateString(),
              },
              {
                name: 'Fiama Fafalda',
                restaurantName: 'Katies Pizza & Pasta',
                rating: 3,
                cuisine: 'Italian',
                date: '8/1/2023',
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
