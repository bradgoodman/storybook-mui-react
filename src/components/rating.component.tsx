import React, { SyntheticEvent, useState } from 'react'

import StarIcon from '@mui/icons-material/Star'
import {
  Box,
  Rating as MuiRating,
  RatingProps as MuiRatingProps,
  Typography,
} from '@mui/material'

type RatingBaseProps = Pick<MuiRatingProps, 'value'>

export interface RatingProps extends RatingBaseProps {
  label: string
  rating: number | null
  setValue: (value: number | null) => void
}

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
}

const getLabelText = (value: number) =>
  `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`

export const Rating = ({ rating, label, setValue }: RatingProps) => {
  const [hover, setHover] = useState(-1)

  return (
    <>
      <Typography component="legend">{label}</Typography>
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <MuiRating
          emptyIcon={<StarIcon fontSize="inherit" style={{ opacity: 0.55 }} />}
          getLabelText={getLabelText}
          name="hover-feedback"
          precision={0.5}
          value={rating}
          onChange={(
            event: SyntheticEvent<Element, Event>,
            value: number | null
          ): void => {
            setValue(value)
          }}
          onChangeActive={(
            event: SyntheticEvent<Element>,
            newHover: number
          ): void => {
            setHover(newHover)
          }}
        />
        {rating !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
        )}
      </Box>
    </>
  )
}

Rating.defaultProps = {
  value: 3,
}
