const mongoose = require('mongoose');
const event =new mongoose.Schema({
  eventId: String,
  eventname:String,
  timefrom: Date,
  timeto: Date,
  location: String,
  description:String

},{
	tiemstamps:{}
});
module.exports = mongoose.model("Event", user);