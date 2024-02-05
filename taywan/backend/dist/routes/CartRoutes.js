"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// routes/cartRoutes.ts
const express_1 = tslib_1.__importDefault(require("express"));
const CartController_1 = tslib_1.__importDefault(require("../controllers/CartController"));
const AuthenticationMiddleware_1 = require("../middlewares/AuthenticationMiddleware");
const router = express_1.default.Router();
router.get('/details', AuthenticationMiddleware_1.authenticateUser, CartController_1.default.getCartDetails);
router.post('/add', AuthenticationMiddleware_1.authenticateUser, CartController_1.default.addToCart);
exports.default = router;
//# sourceMappingURL=CartRoutes.js.map