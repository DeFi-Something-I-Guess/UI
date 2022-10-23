
import React from 'react';
import ChatsList from '../Components/ChatsList.js';
import ChatAddress from '../Components/ChatAddress.js';
import Chat from '../Components/Chat.js';
import ChatInput from '../Components/ChatInput.js';
import ChatHeader from '../Components/ChatHeader.js';
import Grid from '@material-ui/core/Grid';

import GlobalStyles from '../GlobalStyles';

export default function ChatPage() {
  const classes = GlobalStyles();
  var showPlaceholder = false

  return (
    <div className="Chat">
      <Grid container spacing={1} >

        <Grid item xs={4} sm={4} md={4} xl={4}>
          
          <Grid container spacing={1} >
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <ChatAddress/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
            <ChatsList />
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={8} sm={8} md={8} xl={8}>
          
          <Grid container spacing={1} >
          <Grid item xs={12} sm={12} md={12} xl={12}>
          <ChatHeader/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Chat />
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <ChatInput/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}