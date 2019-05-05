import React from 'react';

import PrivateHeader from './PrivateHeader';
import LinksList from '../ui/linksList';
import AddLink from './AddLink';

export default class Link extends React.Component {
  render() {
    return (
      <div>
				<PrivateHeader title="Your Links" />
				<LinksList />
				<AddLink />
      </div>
    );
  }
}
