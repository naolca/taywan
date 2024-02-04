"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
//Importing project dependancies that we installed earlier
const dotenv = tslib_1.__importStar(require("dotenv"));
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const db_1 = tslib_1.__importDefault(require("./config/db"));
//Importing .env validation 
const validateEnv_1 = tslib_1.__importDefault(require("./utils/validateEnv"));
const UserRoutes_1 = tslib_1.__importDefault(require("./routes/UserRoutes"));
const productRoutes = require('./routes/ProductRoutes');
const cartRoutes = require('./routes/CartRoutes');
const reviewRoutes = require('./routes/ReviewRoutes');
//App Varaibles 
dotenv.config();
(0, validateEnv_1.default)();
//intializing the express app 
const app = (0, express_1.default)();
// make sure to connect to the database
db_1.default;
//using the dependancies
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//Routes
app.use('/api/users', UserRoutes_1.default);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/reviews', reviewRoutes);
//exporting app
module.exports = app;
//# sourceMappingURL=index.js.map