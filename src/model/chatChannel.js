import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const chatChannelSchema = new Schema({
  chatUserId: {type: Schema.Types.ObjectId, ref: 'ChatUser_id'},
  channelUrl: {type: String, required: true},
});

module.exports = mongoose.model('ChatChannel', chatChannelSchema, 'chatChannel');
