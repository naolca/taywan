"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/productRoutes.ts
const express_1 = __importDefault(require("express"));
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const AuthenticationMiddleware_1 = require("../middlewares/AuthenticationMiddleware");
const router = express_1.default.Router();
router.post('/create', AuthenticationMiddleware_1.authenticateUser, ProductController_1.default.createProduct);
router.get('/:id', AuthenticationMiddleware_1.authenticateUser, ProductController_1.default.getProductDetails);
router.get('/', AuthenticationMiddleware_1.authenticateUser, ProductController_1.default.getProducts);
// default export ProductRoutes
exports.default = router;
//dfs
//# sourceMappingURL=ProductRoutes.js.map