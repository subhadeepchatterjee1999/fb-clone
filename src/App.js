

import React from 'react';
import './App.css';
import Header from "./components/header.js"
import Sidebar from "./components/sidebar.js"
import Feed from "./components/feed.js"
import Widgets from "./components/widgets.js"
import Login from "./components/login.js"
import {useStateValue} from "./StateProvider.js"
function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user?(<Login />):(<>
        <Header />
        <div className="app_body">
          <Sidebar picurl ={user.photoURL} title={user.displayName}/>
          <Feed picurl = {user.photoURL}/>
          <Widgets />
        </div>

      </>)}

    </div>
  );
}

export default App;
