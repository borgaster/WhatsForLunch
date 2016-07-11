import { Template } from 'meteor/templating';
import { Menu } from '../api/menu.js';
import { Meteor } from 'meteor/meteor';
import './body.html';
let dayOfWeek = new Date().getDayOfWeek();
let menuOfToday = Menu.find({dayOfWeek: "Monday"})
let recordID = null;
Template.body.helpers({
	menu: () => {
		menuOfToday.forEach((menu) => {
			recordID = menu._id; 
		});
		return menuOfToday;
	},
	dayOfWeek: () => {
		return dayOfWeek;
	}
});

Template.soup.events({
	'click .rateit'(event, template){
		let description = this.text;
		let rate = template.$('.rateit').rateit('value');
		Meteor.call('soups.rateit', "soups", rate, recordID, description);
		return false;
	}
});

Template.main.events({
	'click .rateit'(event, template){
		let description = this.text;
		let rate = template.$('.rateit').rateit('value');
		Meteor.call('mains.rateit', "mains", rate, recordID, description);
		return false;
	}
});

Template.dessert.events({
	'click .rateit'(event, template){
		let description = this.text;
		let rate = template.$('.rateit').rateit('value');
		Meteor.call('desserts.rateit', "desserts", rate, recordID, description);
		return false;
	}
});

// .rateit elements need to be progressively enhanced after they're created
Template.rating.rendered = function () {
  this.$('.rateit').rateit();
}