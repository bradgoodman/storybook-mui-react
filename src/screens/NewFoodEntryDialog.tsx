import React, { FC, useState } from 'react'

import { Grid } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import dayjs, { Dayjs } from 'dayjs'

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
  const [cuisine, setCuisine] = useState<string | null>('')
  const [notes, setNotes] = useState<string>('')
  const [value, setValue] = React.useState<Dayjs | null>(dayjs())

  const cuisines = [
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <StandardTextField
            label="Name"
            value={foodName}
            onChange={setFoodName}
          />
        </Grid>
        <Grid item xs={6}>
          <StandardTextField
            label="Restaurant Name"
            value={restaurantName}
            onChange={setRestaurantName}
          />
        </Grid>
        <Grid item xs={6}>
          <AutocompleteTextField
            id="cuisine"
            label="Cuisine"
            options={cuisines.sort(alphabeticalSort)}
            value={cuisine}
            onChange={setCuisine}
          />
        </Grid>
        <Grid item xs={6}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Date"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </Grid>
        <Grid item xs={6}>
          <Rating label="Rating" rating={foodRating} setValue={setFoodRating} />
        </Grid>
        <Grid item xs={12}>
          <StandardTextField
            multiline
            label="Notes"
            placeholder="It has notes of ..."
            rows={2}
            value={notes}
            onChange={setNotes}
          />
        </Grid>
      </Grid>
    </DialogBox>
  )
}

export default NewFoodEntryDialog
