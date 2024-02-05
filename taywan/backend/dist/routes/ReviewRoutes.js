"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// routes/reviewRoutes.ts
const express_1 = tslib_1.__importDefault(require("express"));
const ReviewController_1 = tslib_1.__importDefault(require("../controllers/ReviewController"));
const AuthenticationMiddleware_1 = require("../middlewares/AuthenticationMiddleware");
const router = express_1.default.Router();
router.post('/create', AuthenticationMiddleware_1.authenticateUser, ReviewController_1.default.createReview);
router.get('/product/:productId', ReviewController_1.default.getProductReviews);
exports.default = router;
//# sourceMappingURL=ReviewRoutes.js.map