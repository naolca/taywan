"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// config/db.ts
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://firaolca:%23RHp2sEx_gznCGq@cluster0.ckozrjw.mongodb.net/?retryWrites=true&w=majority';
if (!MONGODB_URI) {
    throw new Error('MongoDB URI is not provided.');
}
mongoose_1.default.connect(MONGODB_URI);
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