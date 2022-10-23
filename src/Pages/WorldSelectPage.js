
import React from 'react';
import Grid from '@material-ui/core/Grid';

import GlobalStyles from '../GlobalStyles';
import Card from '@material-ui/core/Card';
import Image from '../img/Optimism.png';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`
  }
};

export default function WorldSelectPage() {
  const classes = GlobalStyles();
  var showPlaceholder = false

  return (
    <div className="WorldSelectPage">
      <Grid container spacing={1} >
        <Grid item xs={12} sm={12} md={12} xl={12}>
          <Card>
            <Typography variant="h1" className={classes.title} align="center"> World Select </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12} xl={12}>
          <Card>
            <Grid container spacing={1} >
              <Grid item xs={3} sm={3} md={3} xl={3}></Grid>
              <Grid item xs={3} sm={3} md={3} xl={3}><Avatar alt="Optimism"  className={classes.largeAvatar} src="/img/Optimism.png"/></Grid>
              <Grid item xs={3} sm={3} md={3} xl={3}><Avatar alt="Polygon"  className={classes.largeAvatar} src="/img/Polygon.png"/></Grid>
              {false && (
                <>
                  <Grid item xs={6} sm={6} md={6} xl={6}><Avatar alt="Chronos" src="/img/Chronos.png" variant="square" className={classes.largeAvatar}/></Grid>
                  <Grid item xs={6} sm={6} md={6} xl={6}><Avatar alt="Aurora" src="/img/Aurora.png" variant="square" className={classes.largeAvatar} /></Grid>
                </>
               )}
              
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
