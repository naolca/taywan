"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const UserModel_1 = tslib_1.__importDefault(require("../models/UserModel"));
class UserRepository {
    async create(username, email, password) {
        const user = new UserModel_1.default({ username, email, password });
        await user.save();
        return user;
    }
    async findByUsername(username) {
        return UserModel_1.default.findOne({ username });
    }
    async findByEmail(email) {
        return UserModel_1.default.findOne({ email });
    }
}
exports.default = new UserRepository();
//# sourceMappingURL=UserRepository.js.map