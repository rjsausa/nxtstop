import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Input } from '@mui/material';

import useStyles from './styles';

const List = () => {

    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const places = [{ name: 'Jollibee' }, { name: 'McDo' }]

    return (
        <div className={ClassNames.container}>
            <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>



        </div>
        )
}

export default List;