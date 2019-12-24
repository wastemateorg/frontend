import React, { Component } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    card: {
      display: 'flex',
      height: '20%',
      padding: '5px',
      marginTop: '10px'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'scroll',
      minWidth: '55%'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '60%'
    },
    cover: {
      width: '55%',
      minWidth: '45%',
      minHeight: '140px'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

  export default function MediaControlCard(props) {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {props.title} 
            </Typography>
            <Typography variant="subtitle2" >
            {props.subtitle}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
           {props.details} 
            </Typography>
          </CardContent>
        </div>
         <CardMedia
          className={classes.cover}
          image={props.image}
          title="trash"
        />
      </Card>
    );
  }
