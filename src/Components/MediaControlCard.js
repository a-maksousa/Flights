import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( () => ({
    root: {
        cursor:"pointer",
        display: 'flex',
        boxShadow:'0 1px 2px 0 rgba(60,64,67,.30), 0 1px 3px 1px rgba(60,64,67,.15)',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 150,
    }
}));

export default function MediaControlCard(props) {
    const classes = useStyles();

    return (
        <Card style={{ margin: 10 }} className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={props.image}
                title={props.title}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">{props.title}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{props.price}</Typography>
                </CardContent>
            </div>

        </Card>
    );
}
