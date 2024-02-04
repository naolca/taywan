"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const productSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    colors: { type: [String], default: [] },
    sizes: { type: [String], default: [] },
    category: { type: String, required: true },
    style: { type: String, required: true },
    images: { type: [String], default: [] },
    reviews: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Review' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { versionKey: false });
const ProductModel = mongoose_1.default.model('Product', productSchema);
exports.default = ProductModel;
//# sourceMappingURL=ProductModel.js.map