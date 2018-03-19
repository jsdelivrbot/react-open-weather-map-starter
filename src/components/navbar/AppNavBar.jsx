import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchInput from '../search/SearchInput.jsx'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { toggleNavbar } from '../../actions/navbar'

class AppNavBar extends Component {

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/" className="mr-auto">Open Weather Map API Sample</NavbarBrand>
        <NavbarToggler onClick={this.props.toggle} className="mr-2" />
        <Collapse isOpen={this.props.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <SearchInput/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  isOpen: state.navbar.isOpen
})

const mapDispatchToProps = (dispatch) => ({
  toggle: () => {
    dispatch(toggleNavbar())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppNavBar)
