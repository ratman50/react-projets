import {StreamChat} from "stream-chat";
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import "./App.css";

import { ChannelContainer, ChannelListContainer } from "./components";

const API_KEY="u4xz59zt66c8";
const client=StreamChat.getInstance(API_KEY);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
    </div>
  );
}

export default App;
