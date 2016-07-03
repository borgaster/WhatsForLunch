import { Template } from 'meteor/templating';
import { Menu } from '../api/menu.js';
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
		event.preventDefault();
		let text = this.text;
		let menu = Menu.findOne({_id: recordID})
		console.log(menu)
		menu["soups"].forEach((soup) => {
			if(soup["text"] === text){
				soup["rating"] = soup["rating"] + template.$('.rateit').rateit('value');
				template.$('.rateit').attr("disabled", true);
				Menu.update({_id:recordID}, {
					$set:{
						soups: menu["soups"] 
					}
				});
			}
		});
		return false;
	}
});

// .rateit elements need to be progressively enhanced after they're created
Template.rating.rendered = function () {
  this.$('.rateit').rateit();
}