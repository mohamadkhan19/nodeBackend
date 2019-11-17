import User from '../../model/user';
import bcrypt from 'bcryptjs';

class UserDataExt {

  static findUserByEmail(email, callback) {
    User.findOne({ 'email': email }, (err, userData) => {
      if (err) {
        return callback(err, null);
      } else{
        return callback(null, userData);
      }
    });
  }

  static createUser(req, callback) {
    var user = new User({
      name: req.body.name,
      password: bcrypt.hashSync(req.body.password, 10),
      email: req.body.email
    });
    user.save((err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
    });
  }
}

export default UserDataExt;
