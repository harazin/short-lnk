import React from 'react';
import {Link} from 'react-router';

export default class Signup extends React.Component {
  render() {
    return (
			<div>
			<h1>Signup to Short Lnk</h1>

			<Link to="/">Already have an account? Log in</Link>
			</div>
		);
  }
}
