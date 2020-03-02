import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
    },
    margin: {
        height: theme.spacing(1),
    },
}));

export default function DiscreteSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.margin} />
            <Slider
                defaultValue={80}
                aria-labelledby="discrete-slider-always"
                step={1}
                valueLabelDisplay="on"
            />
        </div>
    );
}
