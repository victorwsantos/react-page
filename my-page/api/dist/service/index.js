"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const default_1 = require("../config/default");
const connect_1 = __importDefault(require("../db/connect"));
class Service {
    constructor() {
        this.connect = connect_1.default;
        this.connect;
        this.app = (0, express_1.default)();
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.listen(default_1.config.port, () => { console.log(`server http://${default_1.config.host}:${default_1.config.port}/ rodando na porta ${default_1.config.port}`); });
    }
}
exports.Service = Service;
