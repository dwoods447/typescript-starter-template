"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.default = {
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || 'localhost',
    node_mailer_key: process.env.NODE_MAILER_KEY,
    authentication: {
        jwtSecret: process.env.JWT_SECRET
    },
    google: {
        PLACES_API: process.env.PLACES_API
    },
    ZIPCODE_API: {
        URL: process.env.ZIPCODE_API_URI,
        API_KEY: process.env.ZIPCODE_API_KEY
    },
    db: {
        connectString: process.env.DB_CONNECT_STRING,
        test: 'mongodb+srv://online-dating-test:online-dating-test@cluster0.nh21d4g.mongodb.net/?retryWrites=true&w=majority'
    }
};
//# sourceMappingURL=default.js.map