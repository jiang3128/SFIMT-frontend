import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {TrackerContainerShortInfo} from'./tracker_container.js';

import {Header} from './tracker_container.js'
import {SiderLeft} from './tracker_container.js'
import {Name} from './tracker_container.js'
// import {SiderRight} from './tracker_container.js'

function App() {
  return (
    <div id="meeting_tracker_root">
      <Header/>
      <SiderLeft/>
      {/* <SiderRight/> */}
      {/* <TrackerContainerShortInfo date={{day:"13September,2020",name:"Professor Tan"}}/> */}
      <Name/>
      <TrackerContainerShortInfo date={{day:"15October,2020",name:"Past Meetings"}}/>
      <TrackerContainerShortInfo date={{day:"19November,2020",name:"Current Meeting"}}/>
      <TrackerContainerShortInfo date={{day:"19November,2020",name:"Future Meetings"}}/>
    </div>
  );
}

export default App;
