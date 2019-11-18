import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const chatUserSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User_id'},
  userName: {type: String, required: true},
});

module.exports = mongoose.model('ChatUser', chatUserSchema, 'chatUsers');
