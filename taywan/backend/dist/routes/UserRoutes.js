"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const UserController_1 = tslib_1.__importDefault(require("../controllers/UserController"));
const router = express_1.default.Router();
router.post('/register', UserController_1.default.register);
router.post('/login', UserController_1.default.login);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map