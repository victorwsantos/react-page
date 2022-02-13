"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const connect_1 = __importDefault(require("../db/connect"));
const service_1 = require("../service");
class Route extends service_1.Service {
    constructor() {
        super();
        this.routersGet();
        this.routerPost();
    }
    routersGet() {
        this.app.get('/', (req, res) => {
            res.send('hello World');
        });
        this.app.get('/user', (req, res) => {
            res.send('hello World user');
        });
    }
    routerPost() {
        this.app.post('/add-article', (req, res) => {
            const { tittle, text } = req.body;
            const article = {
                tittle,
                text
            };
            connect_1.default.create(article).then(() => {
                res.send('Artigo criado com sucesso.');
            }).catch((err) => {
                console.log(err);
            });
        });
    }
}
exports.Route = Route;
