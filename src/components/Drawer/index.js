import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {Link} from 'react-router-dom'

export default class DrawerUndockedExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.isOpened}
          onRequestChange={this.props.onRequestChange}
        >
          <MenuItem
            linkButton
            primaryText="Home"
            containerElement={<Link to="/" />}
            onClick={this.props.handleClose}
          />
          <MenuItem
            linkButton
            primaryText="About"
            containerElement={<Link to="/about" />}
            onClick={this.props.handleClose}
          />
          <MenuItem
            linkButton
            primaryText="Florin Salam"
            containerElement={<Link to="/slam" />}
            onClick={this.props.handleClose}
          />
        </Drawer>
      </div>
    )
  }
}
