import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
Date.prototype.getDayOfWeek = function(){   
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ this.getDay() ];
}
export const Menu = new Mongo.Collection('menu');
let courseSchema = new SimpleSchema({
	text: {
		type: String
	},
	rating: {
		type: Number
	}
});

let menuSchema = new SimpleSchema({
	soups: {
		type: [courseSchema]
	},
	mains: {
		type: [courseSchema]
	},
	desserts: {
		type: [courseSchema]
	}
});

Menu.attachSchema(menuSchema);

Meteor.methods({
	'soups.rateit'(mealCourse, rate,  recordID, description){		
		Menu.update({_id: recordID, "soups.text": description}, {
			$inc:{
				"soups.$.rating": rate
			}
		});
	},
	'mains.rateit'(mealCourse, rate,  recordID, description){		
		Menu.update({_id: recordID, "mains.text": description}, {
			$inc:{
				"mains.$.rating": rate
			}
		});
	},

	'desserts.rateit'(mealCourse, rate,  recordID, description){		
		Menu.update({_id: recordID, "desserts.text": description}, {
			$inc:{
				"desserts.$.rating": rate
			}
		});
	}

});

