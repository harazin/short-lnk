import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange } from '../imports/routes/routes';
import { Links } from '../imports/api/links';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
	Links.find().fetch().map((link) => {
		console.log("Link: ", link.url);
	});
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
