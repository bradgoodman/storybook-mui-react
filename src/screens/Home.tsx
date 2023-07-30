import React, { useState } from 'react'

import { Grid } from '@mui/material'

import { DialogBox } from '../components/DialogBoxes'
import { HeaderWithAction } from '../components/HeaderWithAction'
import { Rating } from '../components/Rating'
import { StandardTextField } from '../components/Textfields'

const Home = () => {
  const [newDialogOpen, setNewDialogOpen] = useState<boolean>(false)
  const [restaurantName, setRestaurantName] = useState<string>('')
  const [foodName, setFoodName] = useState<string>('')
  const [foodRating, setFoodRating] = useState<number | null>(3)

  return (
    <>
      <HeaderWithAction text="Home" onClick={() => setNewDialogOpen(true)} />
      {newDialogOpen && (
        <DialogBox
          open={newDialogOpen}
          title="New Food Entry"
          onClose={() => setNewDialogOpen(false)}
        >
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <StandardTextField
                label="Restaurant Name"
                value={restaurantName}
                onChange={setRestaurantName}
              />
            </Grid>
            <Grid item xs={6}>
              <StandardTextField
                label="Name"
                value={foodName}
                onChange={setFoodName}
              />
            </Grid>
            <Grid item xs={6}>
              <Rating
                label="Rating"
                rating={foodRating}
                setValue={setFoodRating}
              />
            </Grid>
          </Grid>
        </DialogBox>
      )}
    </>
  )
}

export default Home
