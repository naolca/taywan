"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const UserRepository_1 = tslib_1.__importDefault(require("../repositories/UserRepository"));
const UserModel_1 = tslib_1.__importDefault(require("../models/UserModel"));
class UserService {
    static async registerUser(userData) {
        const { username, email, password } = userData;
        const existingUser = await UserRepository_1.default.findByUsername(username);
        if (existingUser) {
            throw new Error('Username is already taken');
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const newUser = await UserModel_1.default.create({ username, email, password: hashedPassword });
        return newUser;
    }
    static async loginUser(username, password) {
        const user = await UserRepository_1.default.findByUsername(username);
        if (!user) {
            throw new Error('Invalid username or password');
        }
        const passwordMatch = await bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error('Invalid username or password');
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET || 'secret');
        return token;
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map