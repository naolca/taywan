"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// routes/productRoutes.ts
const express_1 = tslib_1.__importDefault(require("express"));
const ProductController_1 = tslib_1.__importDefault(require("../controllers/ProductController"));
const AuthenticationMiddleware_1 = require("../middlewares/AuthenticationMiddleware");
const router = express_1.default.Router();
router.post('/create', AuthenticationMiddleware_1.authenticateUser, ProductController_1.default.createProduct);
router.get('/:id', AuthenticationMiddleware_1.authenticateUser, ProductController_1.default.getProductDetails);
router.get('/', AuthenticationMiddleware_1.authenticateUser, ProductController_1.default.getProducts);
// default export ProductRoutes
exports.default = router;
//dfs
//# sourceMappingURL=ProductRoutes.js.map