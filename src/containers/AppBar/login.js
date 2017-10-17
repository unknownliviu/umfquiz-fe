import React, {PureComponent} from 'react'
import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import FacebookLogin from 'react-facebook-login'
import ActionAndroid from 'material-ui/svg-icons/action/android'
import {ToolbarTitle, ToolbarGroup} from 'material-ui/Toolbar'
const responseFacebook = response => {
  console.log(response)
}

class Login extends PureComponent {
  static muiName = 'FlatButton'

  render() {
    const {handleLogin} = this.props
    return (
      <ToolbarGroup>
        <FlatButton
          {...this.props}
          children={
            <FacebookLogin
              appId={process.env.REACT_APP_FB_APP_ID}
              autoLoad={true}
              fields="name,email,picture"
              callback={handleLogin}
              cssClass="fb-login-button"
              tag="div"
              textButton="Login"
              size="medium"
            />
          }
        />
      </ToolbarGroup>
    )
  }
}

class LoggedIn extends PureComponent {
  static muiName = 'IconMenu'
  render() {
    return (
      <ToolbarGroup>
        <ToolbarTitle text={this.props.name} />
        <IconMenu
          {...this.props}
          iconButtonElement={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Sign out" onClick={this.props.handleLogout} />
        </IconMenu>
      </ToolbarGroup>
    )
  }
}

export {Login, LoggedIn}
