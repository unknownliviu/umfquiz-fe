import React, {PureComponent} from 'react'
import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

class Login extends PureComponent {
  static muiName = 'FlatButton'

  render() {
    return <FlatButton label="Login" {...this.props} />
  }
}

class LoggedIn extends PureComponent {
  static muiName = 'IconMenu'
  render() {
    return (
      <IconMenu
        {...this.props}
        iconButtonElement={
          <div>
            {this.props.name}
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Sign out" onClick={this.props.handleLogout} />
      </IconMenu>
    )
  }
}

export {Login, LoggedIn}
