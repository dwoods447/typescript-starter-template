"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_js_1 = require("./utils/server.js");
const default_1 = __importDefault(require("./config/default"));
const cors_1 = __importDefault(require("cors"));
const app = (0, server_js_1.createServer)();
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use((0, cors_1.default)());
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => res.status(200).json({ message: 'This is a message from the server' }));
app.listen(default_1.default.PORT, () => console.log(`SERVER listening on port ${default_1.default.PORT}!`));
//# sourceMappingURL=app.js.map