import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from '../Drawer'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class CustomAppBar extends React.Component {
  constructor(props) {
    super(props)

    this.onRequestChange = this.onRequestChange.bind(this)
    this.openDrawer = this.openDrawer.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)
    
    this.state = {
      drawerOpen: false
    }
  }

  onRequestChange () {
    console.log('muie staea')
    this.setState({drawerOpen: !this.state.drawerOpen})
  }

  openDrawer () {
    this.setState({drawerOpen: true})
  }

  closeDrawer () {
    this.setState({drawerOpen: false})
  }

  render () {
    return (
      <div>
        <AppBar
          title={this.props.title}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.onRequestChange}
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

export default CustomAppBar;