"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const validateEnv = () => {
    (0, envalid_1.cleanEnv)(process.env, {
        // NODE_ENV: str(), 
        PORT: (0, envalid_1.port)(),
    });
};
exports.default = validateEnv;
//# sourceMappingURL=validateEnv.js.map