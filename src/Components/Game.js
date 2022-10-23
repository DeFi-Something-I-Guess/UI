
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
  var x = 0;
  var y = 0;

  const handleCreateFarm = (e) => {
    e.preventDefault();
    createFarm(state.web3, x, y);
  }

  const handleHarvest = (e) => {
    e.preventDefault();
    harvest(state.web3, x, y);
  }

  const handlePlantTree = (e) => {
    e.preventDefault();
     upgradeResource(state.web3, x, y, 4);
  }

  return (
    <div className="Game">
      <Card>
        <Button variant="contained" color="primary" onClick={handleCreateFarm} className={classes.button}> Create Farm </Button>
        <Button variant="contained" color="primary" onClick={handlePlantTree} className={classes.button}> Plant Tree </Button>
        <Button variant="contained" color="primary" onClick={handleHarvest} className={classes.button}> Harvest </Button>

      </Card>
    </div>
  );
}
