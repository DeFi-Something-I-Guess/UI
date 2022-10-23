
import React, { useContext } from 'react';
import GlobalStyles from './../GlobalStyles';
import { Context } from './../store'

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import {
  harvest, upgradeResource, createFarm,
  usersFarm
} from "../Utils/web3_transaction_building.js"

export default function Game() {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();

  return (
    <div className="Game">
      <Card>
        <Button variant="contained" color="primary" onClick={handleRewardClaim} className={classes.button}> Create Farm </Button>
        <Button>Create Farm</Button>
        <Button>Plant Tree</Button>
        <Button>Harvest</Button>
      </Card>
    </div>
  );
}
