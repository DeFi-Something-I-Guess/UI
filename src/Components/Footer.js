
import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';

import GlobalStyles from '../GlobalStyles';

export default function Footer() {
  const classes = GlobalStyles();
  return (
    <div className="Footer">
      <Paper className={classes.headerPaper}>
        <Divider color="inherit"/>
        <Card className={classes.cardWithoutBg}>
          <Typography align="center"> Buidl By the "Defi Something I Guess" Team</Typography>
        </Card>
      </Paper>
    </div>
  );
}
