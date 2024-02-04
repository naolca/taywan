"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET || 'secret'; // Replace 'secret' with a strong secret in production
const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Token not provided' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        req.user = decoded;
        next();
    }
    catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
};
exports.authenticateUser = authenticateUser;
//# sourceMappingURL=AuthenticationMiddleware.js.map