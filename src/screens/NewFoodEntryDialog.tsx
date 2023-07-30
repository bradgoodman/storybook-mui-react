import React, { FC, useState } from 'react'

import { Grid } from '@mui/material'

import { DialogBox } from '../components/DialogBoxes'
import { Rating } from '../components/Rating'
import {
  AutocompleteTextField,
  StandardTextField,
} from '../components/Textfields'
import { alphabeticalSort } from '../utils/sort'

interface INewFoodEntryDialog {
  onClose: (value: boolean) => void
  open: boolean
}

const NewFoodEntryDialog: FC<INewFoodEntryDialog> = (props) => {
  const [restaurantName, setRestaurantName] = useState<string>('')
  const [foodName, setFoodName] = useState<string>('')
  const [foodRating, setFoodRating] = useState<number | null>(3)
  const [foodCategory, setFoodCategory] = useState('')

  const foodCategories = [
    'Chinese',
    'Vietnamese',
    'Thai',
    'Mexican',
    'French',
    'American',
    'Italian',
  ]

  return (
    <DialogBox
      open={props.open}
      title="New Food Entry"
      onClose={() => props.onClose(false)}
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
          <Rating label="Rating" rating={foodRating} setValue={setFoodRating} />
        </Grid>
        <Grid item xs={6}>
          <AutocompleteTextField
            id="category"
            label="Food Category"
            options={foodCategories.sort(alphabeticalSort)}
            value={foodCategory}
            onChange={setFoodCategory}
          />
        </Grid>
      </Grid>
    </DialogBox>
  )
}

export default NewFoodEntryDialog
