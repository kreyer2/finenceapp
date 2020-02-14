import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App container-fluid">
      <Header/>
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
