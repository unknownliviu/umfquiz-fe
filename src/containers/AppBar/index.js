import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from '../../components/Drawer'
import {Login, LoggedIn} from './login.js'
import {connect} from 'react-redux'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
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

  login(response) {
    const {userLogin, loginMutation} = this.props
    const {userId, name, email, userID} = response
    console.log('response', response)
    const payload = {
      name,
      token: userID,
      email
    }
    loginMutation(payload).then(() => this.props.userLogin({...payload}))
  }

  render() {
    const {user, userLogout} = this.props
    return (
      <div>
        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={this.onRequestChange}
          iconElementRight={
            user.loggedIn ? (
              <LoggedIn name={user.name} handleLogout={userLogout} />
            ) : (
              <Login handleLogin={this.login} />
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
  userLogin: details => {
    dispatch(userActions.userLogin(details))
  },
  userLogout: () => dispatch(userActions.userLogout())
})

const query = gql`
  mutation umfUserAuth($name: String!, $email: String!, $token: String!) {
    userAuth(
      user: {
        name: $name
        email: $email
        fb_auth_hash: $token
        phone: "07-remove-me"
      }
    ) {
      email
    }
  }
`

const CustomAppBarWithData = graphql(query, {
  props: ({mutate, ownProps: {userLogin}}) => ({
    loginMutation: user =>
      mutate({
        variables: {...user}
      })
  })
})(CustomAppBar)

export default connect(mapStateToProps, mapDispatchToProps)(
  CustomAppBarWithData
)
