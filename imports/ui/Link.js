import React from 'react';

import PrivateHeader from './PrivateHeader';
import LinksList from './LinksList';
import LinksListFilters from './LinksListFilters';
import AddLink from './AddLink';

export default () => {
  return (
    <div>
	      <PrivateHeader title="Your Links"/>
				<div className="page-content">
					<LinksListFilters/>
					<AddLink/>
		      <LinksList/>
				</div>
    </div>
  );
};
