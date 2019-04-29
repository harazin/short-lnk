import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if(Meteor.isServer) {
	Meteor.publish('links', function () {
		return Links.find({userId: this.userId});
	});
}

Meteor.methods({
	greetUser(name) {
		console.log('greetUser is running');

		if (!name) {
			throw new Meteor.Error('invalid-argument', 'Name is required!')
		}

		return `Hello ${name}!`;
	},
	addNumbers(num1, num2) {
		if(typeof num1 === 'number' && typeof num2 === 'number') {
			return num1 + num2;
		} else {
			throw new Meteor.Error('invalid-argument', 'Parameter is not a number.');
		}
	}
});
