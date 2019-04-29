import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
	// const employeeSchema = new SimpleSchema({
	// 	name: {
	// 		type: String,
	// 		min: 1,
	// 		max: 200,
	// 	},
	// 	hourlyWage: {
	// 		type: Number,
	// 		min: 0
	// 	},
	// 	email: {
	// 		type: String,
	// 		regEx: SimpleSchema.RegEx.Email,
	// 	}
	// });
	//
	// employeeSchema.validate({
	// 	name: 'Mark',
	// 	hourlyWage: 6,
	// 	email: "Mark@gmail.com"
	// });
});
