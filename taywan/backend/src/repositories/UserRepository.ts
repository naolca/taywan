
import UserModel from "../models/UserModel";

class UserRepository {

  async create(username: string, email: string, password: string) {
    const user = new UserModel({ username, email, password });
    await user.save();
    return user;
  }

  async findByUsername(username: string) {
    return UserModel.findOne({ username });
  }

  async findByEmail(email: string) {
    return UserModel.findOne({ email });
  }

  async findById(userId: string) {
    console.log(userId);
    console.log(UserModel.findById(userId));
    return UserModel.findById(userId);
  }
}

export default new UserRepository();