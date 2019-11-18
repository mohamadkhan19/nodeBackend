import ChatUser from './../model/chatUser';
import ChatChannel from './../model/chatChannel';

class ChatService {

  static createChatUser(userID, userName, callback) {
    var chatUser = new ChatUser({
        userId: userID,
        userName: userName
      });
      chatUser.save((err, result) => {
          if (err) {
            return callback(err, null);
          }
          return callback(null, result);
      });
  }

  static createChatChannel(chatUserId, callback) {
    var chatChannel = new ChatChannel({
        chatUserId: chatUserId,
        channelUrl: `https://siblychat.com/channel/${chatUserId}`
      });
      chatChannel.save((err, result) => {
          if (err) {
            return callback(err, null);
          }
          return callback(null, result);
      });
  }

}

export default ChatService;
