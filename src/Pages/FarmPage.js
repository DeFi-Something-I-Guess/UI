
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

export default function FarmPage() {
  const classes = GlobalStyles();
  var showPlaceholder = false

  return (
    <div className="FarmPage">
      <Grid container spacing={1} >
        <Grid item xs={12} sm={12} md={12} xl={12}>
          <Card>
            <Typography variant="h1" className={classes.title} align="center"> Your Farm </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
