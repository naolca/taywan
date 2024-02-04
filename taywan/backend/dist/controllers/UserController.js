"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const UserService_1 = tslib_1.__importDefault(require("../services/UserService"));
class UserController {
    static async register(req, res) {
        try {
            const { username, email, password } = req.body;
            const newUser = await UserService_1.default.registerUser({ username, email, password });
            res.status(201).json(newUser);
        }
        catch (error) {
            console.error('Error during user registration:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async login(req, res) {
        try {
            const { username, password } = req.body;
            const token = await UserService_1.default.loginUser(username, password);
            res.json({ token });
        }
        catch (error) {
            console.error('Error during user login:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map