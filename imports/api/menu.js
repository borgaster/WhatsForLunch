import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
Date.prototype.getDayOfWeek = function(){   
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ this.getDay() ];
}
export const Menu = new Mongo.Collection('menu');

Meteor.methods({
	'rateit'(mealCourse, rate,  recordID, description){
		let menu = Menu.findOne({_id: recordID})
		menu[mealCourse].forEach((meal) => {
			if(meal["text"] === description){
				meal["rating"] = meal["rating"] + rate
			}
		})
		delete menu._id
		Menu.update({_id:recordID}, { $set: menu });
	}
});

