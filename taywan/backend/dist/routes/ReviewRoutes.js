"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/reviewRoutes.ts
const express_1 = __importDefault(require("express"));
const ReviewController_1 = __importDefault(require("../controllers/ReviewController"));
const AuthenticationMiddleware_1 = require("../middlewares/AuthenticationMiddleware");
const router = express_1.default.Router();
router.get('/', ReviewController_1.default.getAllReviews);
router.post('/create', AuthenticationMiddleware_1.authenticateUser, ReviewController_1.default.createReview);
router.get('/product/:productId', ReviewController_1.default.getProductReviews);
exports.default = router;
//# sourceMappingURL=ReviewRoutes.js.map