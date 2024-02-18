"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const router = express_1.default.Router();
router.post('/register', UserController_1.default.register);
router.post('/login', UserController_1.default.login);
router.get('/profile', UserController_1.default.getProfile);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map