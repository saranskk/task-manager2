// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Export the model properly to avoid overwrite errors
module.exports = mongoose.models.User || mongoose.model('User', userSchema);





















// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });

// // Hash password
// userSchema.pre('save', async function(next){
//   if(!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// userSchema.methods.comparePassword = async function(password){
//   return await bcrypt.compare(password, this.password);
// }

// module.exports = mongoose.model('User', userSchema);

// ///const mongoose = require('mongoose');

// // const userSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   email: { type: String, required: true, unique: true },
// //   password: { type: String, required: true }
// // }, { timestamps: true });



// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });

// //module.exports = mongoose.model('User', userSchema);


// module.exports = mongoose.model('User', userSchema);