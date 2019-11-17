import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import mongooseUniqueValidator from 'mongoose-unique-validator';

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', userSchema, 'users');
