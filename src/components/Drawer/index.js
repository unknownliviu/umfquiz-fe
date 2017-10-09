import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'


export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={ this.props.isOpened}
          onRequestChange={this.props.onRequestChange}
        >
          <MenuItem><Link to="/" onClick={this.props.handleClose}>Home</Link></MenuItem>
          <MenuItem><Link to="/about" onClick={this.props.handleClose}>About</Link></MenuItem>
          <MenuItem><Link to="/salam" onClick={this.props.handleClose}>Florin Salam</Link></MenuItem>
        </Drawer>
      </div>
    );
  }
}