// class User {
//   constructor(id, username, fullname, email) {
//     this.id = id;
//     this.username = username;
//     this.fullname = fullname;
//     this.email = email;
//     this.broads = [];
//   }
// }
const mongoose = require('mongoose');
const user =new mongoose.Schema({
  userId: String,
  username:String,
  googleId:String, 
  password:String, 
  birthday: Date,
  listevent: [{
    type: mongoose.Schema.Types.ObjectId,
		ref: 'Event'
  }],
  listfollower: [{
    type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
  }]

},{
	tiemstamps:{}
});
module.exports = mongoose.model("User", user);