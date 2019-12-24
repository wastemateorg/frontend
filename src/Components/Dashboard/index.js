import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Map from "./map";
import PhotoList from './LeftPanel/PhotoList'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    paddingTop: "5px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100vh"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <PhotoList />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <div className="Map">
            <Map />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
