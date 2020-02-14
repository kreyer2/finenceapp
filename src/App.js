import React, {useEffect} from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Main/Sidebar";
import { connect } from 'react-redux';
import {getData} from "./actions/currency__action";

function App({ getData, data }) {
  useEffect(() => {
    getData()
  }, [getData]);

  return (
    <div className="App container-fluid">
      <Header/>
      <Sidebar/>
      <Main data={data}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.currency
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getData: (type) => dispatch(getData(type)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
