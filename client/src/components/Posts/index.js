import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));


export default function AutoGridNoWrap() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>{username}</Avatar> // username
                    </Grid>
                    <Grid item m>
                        <Typography>{title}</Typography> //user post title
                    </Grid>
                    <Grid item s>
                        <Typography>{content}</Typography> //user post
                    </Grid>
                    <Grid item xs>
                        <Typography>{createdAt}</Typography> //date and time of post
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}