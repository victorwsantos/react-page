"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
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
        this.app.post('/', (req, res) => {
            res.send('rota post');
        });
    }
}
exports.Route = Route;
