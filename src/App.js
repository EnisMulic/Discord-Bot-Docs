import React from "react"

import Channel from "./components/Channel"

import './App.css';


const App = () => {
  const channels = ["Channel 1", "Channel 2", "Channel 3"];
  return (
    <div>
      {channels.map((channel, index) => <Channel name={channel} key={index}/>)}
    </div>
  );
}

export default App;
