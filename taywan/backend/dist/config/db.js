"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// config/db.ts
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const { MONGODB_URI } = process.env;
if (!MONGODB_URI) {
    throw new Error('MongoDB URI is not provided.');
}
mongoose_1.default.connect(MONGODB_URI, {});
const db = mongoose_1.default.connection;
db.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
});
db.once('open', () => {
    console.log('MongoDB connected successfully');
});
exports.default = db;
//# sourceMappingURL=db.js.map