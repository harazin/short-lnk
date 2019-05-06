import React from 'react';

import PrivateHeader from './PrivateHeader';
import LinksList from './LinksList';
import LinksListFilters from './LinksListFilters';
import AddLink from './AddLink';

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links"/>
			<LinksListFilters/>
			<AddLink/>
      <LinksList/>
    </div>
  );
};
