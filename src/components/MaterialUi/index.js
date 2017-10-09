import React from 'react';
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
 
const MyAwesomeReactComponent = (label) => (
  <Link to="/quizzes"><RaisedButton label="Quizzes"/></Link>
);
 
export default MyAwesomeReactComponent;