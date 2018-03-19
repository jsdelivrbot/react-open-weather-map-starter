import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'reactstrap'
import { receiveWeatherData } from '../../actions/search'


const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  type: 'search',
  name: 'search',
  onChange: dispatchProps.onChange,
  onKeyPress: dispatchProps.onKeyPress,
  placeholder:'search you city'
})

const mapStateToProps = (state) => ({
  searchText: state.search.searchText
})

const mapDispatchToProps = (dispatch) => ({
  onkeypress: (e) => {
    //on ENTER key is pressed
    if (e.keyCode == 13) {
      dispatch(receiveWeatherData())
    }
  }
})
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Input)
