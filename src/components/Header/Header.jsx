import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <ModeOfTravelIcon />
                <Typography variant="h5" className={classes.title}>
                    NxtStop
                </Typography>
                <Box display="flex">
                        <Typography variant="h6" className={classes.title}>
                            Find your Next Stop
                        </Typography>
                        {/* <Autocomplete> */}
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                            </div>
                        {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>


        );
}

export default Header;