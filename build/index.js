"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.app = express_1.default();
        this.libs();
        this.routes();
    }
    libs() {
        this.app.use(body_parser_1.default.json());
        //this.app.use(express.json())
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send('hello this is hospital api');
        });
    }
}
const app = new App().app;
const port = 3000;
app.listen(port, () => {
    console.log(`This app listening at http://localhost:${port}`);
    console.log(`This app run is ${process.env.DB_HOST}`);
});
