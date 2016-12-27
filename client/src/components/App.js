import React, { Component } from 'react'

// import state management
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/';

// import component
import Main from './Main'

class App extends Component {
  render() {
    return (
      <Main />
    )
  }
}

function mapStateToProps(state, props) {
  return {
    cars: state.cars,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
