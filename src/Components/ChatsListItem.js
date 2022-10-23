
import React, { useContext } from 'react';
import GlobalStyles from './../GlobalStyles';
import { Context } from './../store'

import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import { Identicon } from 'ethereum-react-components';


export default function ChatsListItem(props) {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();

  var address = props.address
  if(address.length ===1 ){
    address = props.address[0]
  }

  var dateTime = props.time
  if (props.showDate) {
    dateTime = props.date;
  }

  const handleClick = (e) => {
    dispatch({ type: 'selectedAddress', payload: props.address });
    dispatch({ type: 'selectedChain', payload: props.chainId });
  }

  var ident = []
  try {
    ident.push(<Identicon address={address} />)
  }
  catch{

  }

  return (
    <div className="ChatsListItem">
      <ListItem button component={Button} onClick={() => [handleClick()]} alignItems="flex-start">
        <ListItemAvatar>
          {ident}
        </ListItemAvatar>
        <ListItemText
          primary={props.address}
        />
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="secondary"
        > {dateTime}
        </Typography>
      </ListItem>
    </div>
  );
}
