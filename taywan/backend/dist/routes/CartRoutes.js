"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/cartRoutes.ts
const express_1 = __importDefault(require("express"));
const CartController_1 = __importDefault(require("../controllers/CartController"));
const AuthenticationMiddleware_1 = require("../middlewares/AuthenticationMiddleware");
const router = express_1.default.Router();
router.get('/details', AuthenticationMiddleware_1.authenticateUser, CartController_1.default.getCartDetails);
router.post('/add', AuthenticationMiddleware_1.authenticateUser, CartController_1.default.addToCart);
exports.default = router;
//# sourceMappingURL=CartRoutes.js.map