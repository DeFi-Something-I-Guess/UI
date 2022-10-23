
import React, { useContext } from 'react';
import GlobalStyles from './../GlobalStyles';
import { Context } from './../store'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import { Identicon } from 'ethereum-react-components';

export default function ChatHeader(props) {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();
  var address = state.selectedAddress
  if(address.length ===1 ){
    address = state.selectedAddress[0]
  }

  return (
    <div className="ChatsListItem">
      <ListItem className={classes.cardWithBGList}  alignItems="flex-start">
        <ListItemAvatar>


          <Identicon address={address} />
        </ListItemAvatar>
        <ListItemText
          primary={state.selectedAddress}
        />
      </ListItem>
    </div>
  );
}
