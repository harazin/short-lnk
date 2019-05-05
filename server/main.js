import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import '../imports/api/links';
import '../imports/startup/simple-schema-configuration';

Meteor.startup(() => {
	WebApp.connectHandlers.use((req, res, next) => {
		console.log('This is a middleware!');
		console.log(req.url, req.method, req.headers, req.query);

		// res.statusCode = 404;
		//
		// res.setHeader('my-custom-header', 'Max was here!');
		// red.write('<h1>This is a middleware!</h1>');
		// red.end();
		next();
	});
});
