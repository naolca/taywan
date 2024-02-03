
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
}

export default new UserRepository();