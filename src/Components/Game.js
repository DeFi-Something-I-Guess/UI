
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

  const handleCreateFarm = (e) => {
    e.preventDefault();
    createFarm(state.web3, 0, 0);
  }

  const handleHarvest = (e) => {
    e.preventDefault();
    var farm = usersFarm(state.web3, 0, 0)
    if(farm != "0x0000000000000000000000000000000000000000"){
     harvest(state.web3, farm);
    }
  }

  const handlePlantTree = (e) => {
    e.preventDefault();
    var farm = usersFarm(state.web3, 0, 0)
    if(farm != "0x0000000000000000000000000000000000000000"){
     upgradeResource(state.web3, farm, 0);
    }
  }

  return (
    <div className="Game">
      <Card>
        <Button variant="contained" color="primary" onClick={handleCreateFarm} className={classes.button}> Create Farm </Button>
        <Button variant="contained" color="primary" onClick={handleHarvest} className={classes.button}> Plant Tree </Button>
        <Button variant="contained" color="primary" onClick={handlePlantTree} className={classes.button}> Harvest </Button>

      </Card>
    </div>
  );
}
