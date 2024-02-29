"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/UserService"));
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
        console.log("here in the controller");
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
    static async getProfile(req, res) {
        try {
            console.log(req.user);
            const { userId } = req.user;
            const user = await UserService_1.default.getUserProfile(userId);
            res.json(user);
        }
        catch (error) {
            console.error('Error during user profile retrieval:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getUserById(req, res) {
        try {
            const userId = req.params.id;
            const user = await UserService_1.default.getUserProfile(userId);
            res.json(user);
        }
        catch (error) {
            console.error('Error during user retrieval:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map