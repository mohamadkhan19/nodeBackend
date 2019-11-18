import User from './../model/user';
import bcrypt from 'bcryptjs';

class UserService {

  static findUserByID(id, callback) {
    User.findOne({ '_id': id }, (err, userData) => {
      if (err) {
        return callback(err, null);
      } else{
        return callback(null, userData);
      }
    });
  }

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

  static updateUser(req, userData, callback) {
    userData.name = req.body.name;
    userData.email = req.body.email;
    userData.save((err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
    });
  }

  static deleteUser(user, callback) {
    user.remove((err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
    });
  }
}

export default UserService;
