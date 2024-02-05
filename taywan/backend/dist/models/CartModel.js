"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const cartSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            productId: { type: mongoose_1.default.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 },
        },
    ],
    totalPrice: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    deliveryFee: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { versionKey: false });
const CartModel = mongoose_1.default.model('Cart', cartSchema);
exports.default = CartModel;
//# sourceMappingURL=CartModel.js.map