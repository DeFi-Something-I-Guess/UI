
import React, { useContext } from 'react';
import GlobalStyles from './../GlobalStyles';
import { Context } from './../store'

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SyncIcon from '@material-ui/icons/Sync';

import ChatsListItem from './ChatsListItem';

import ChainInfo from "../Utils/ChainInfo.js";

export default function ChatsList() {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();

  const handleReload = () => {
    dispatch({ type: 'set_reload', payload: true })
  }

  var chatList = []
  if (state.connected) {
    chatList.push(<ListItem><Button color="inherit" style={{ width: "100%" }} aria-label="open drawer" onClick={handleReload}>Reload Conversations [⚠️BUGGY⚠️]<SyncIcon /></Button></ListItem>)
  }
  for (var i = 0; i < state.conversation['nConversation']; i++) {
    var image = ""
    var chainName = ""

    for (var j = 0; j < ChainInfo['length']; j++) {
      if (ChainInfo[j]['chainId'] === Number(state.conversation[i][0]['chain']))
        image = ChainInfo[j]['Image']
      chainName = ChainInfo[j]['chain']
    }

    chatList.push(<><ChatsListItem
      chain={chainName}
      chainId={Number(state.conversation[i][0]['chain'])}
      imageAddress={image}
      address={state.conversation[i][0]['counterParty']}
      latestMessage={state.conversation[i][0]['message']}
      time={state.conversation[i][0]['timestamp']}
      date={state.conversation[i][0]['timestamp']}
      showDate={false}
      linkAddress={"p?address=" + state.conversation[i][0]['counterParty'] + "&chain=" + state.conversation[i][0]['chain']}
    /></>)


    chatList.push(<><Divider variant="inset" component="li" /></>)
  }

  if (chatList.length === 0) {
    chatList.push(<Typography
      component="span"
      variant="body2"
      className={classes.inline}
      color="secondary"
    > {"No Conversation History OR History Loading..."}
    </Typography>)
  }

  return (
    <div className="ChatsList">
      <Paper style={{ height: 830, overflow: 'auto' }}>
        <List className={classes.cardWithBGList} >
          {chatList}
        </List>
      </Paper>
    </div>
  );
}