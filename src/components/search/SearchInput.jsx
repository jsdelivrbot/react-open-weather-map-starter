import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'reactstrap'
import { fetchWeather, setSearchText } from '../../actions/search'


const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  type: 'search',
  name: 'search',
  onChange: dispatchProps.onChange,
  onKeyPress: dispatchProps.onKeyPress,
  placeholder:'search you city',
  ...stateProps,
  ...ownProps
})

const mapStateToProps = (state) => ({
  searchText: state.search.searchText
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onKeyPress: (e) => {
    //on ENTER key is pressed
    if (e.key == 'Enter') {
      dispatch(fetchWeather(e.target.value))
    }
  },
  onChange: (e) => {
    dispatch(setSearchText(e.target.value))
  }
})
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Input)
