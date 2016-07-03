import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
Date.prototype.getDayOfWeek = function(){   
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ this.getDay() ];
}
export const Menu = new Mongo.Collection('menu');


