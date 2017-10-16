import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from '../../components/Drawer'
import {Login, LoggedIn} from './login.js'
import {connect} from 'react-redux'
import {Actions} from '../../reducers/user.js'
const userActions = Actions

class CustomAppBar extends React.Component {
  constructor(props) {
    super(props)

    this.onRequestChange = this.onRequestChange.bind(this)
    this.openDrawer = this.openDrawer.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)
    this.login = this.login.bind(this)

    this.state = {
      drawerOpen: false
    }
  }

  onRequestChange() {
    this.setState({drawerOpen: !this.state.drawerOpen})
  }

  openDrawer() {
    this.setState({drawerOpen: true})
  }

  closeDrawer() {
    this.setState({drawerOpen: false})
  }

  login() {
    const {userLogin} = this.props

    userLogin({
      name: 'Tony Stark',
      token: 'mark-1-umfquiz-prototype',
      email: 'privatise@world.peace'
    })
  }

  render() {
    const {user, userLogout} = this.props
    return (
      <div>
        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={this.onRequestChange}
          onRightIconButtonTouchTap={this.login}
          iconElementRight={
            user.loggedIn ? (
              <LoggedIn name={user.name} handleLogout={userLogout} />
            ) : (
              <Login />
            )
          }
        />
        <Drawer
          isOpened={this.state.drawerOpen}
          onRequestChange={this.onRequestChange}
          handleClose={this.closeDrawer}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  userLogin: details => dispatch(userActions.userLogin(details)),
  userLogout: () => dispatch(userActions.userLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomAppBar)
