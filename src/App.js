import React from "react"

import './App.css';
import ChannelCategory from "./components/ChannelCategory";


const App = () => {
  const channels = ["Channel 1", "Channel 2", "Channel 3"];
  return (
    <div>
      <ChannelCategory channels={channels} name={"Test"}/>
      <ChannelCategory channels={channels} name={"Test"}/>
      <ChannelCategory channels={channels} name={"Test"}/>
    </div>
  );
}

export default App;
