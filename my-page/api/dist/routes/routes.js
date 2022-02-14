"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const model_1 = __importDefault(require("../models/model"));
const service_1 = require("../service");
const upload_1 = require("../upload/upload");
class Route extends service_1.Service {
    constructor() {
        super();
        this.routersGet();
        this.routerPost();
        this.routeDelet();
    }
    routersGet() {
        this.app.get('/', (req, res) => {
            res.send('hello World');
        });
        this.app.get('/articles', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const article = yield model_1.default.find();
                res.status(200).json(article);
            }
            catch (error) {
                res.status(500).json({ message: error });
            }
        }));
    }
    routerPost() {
        const upload = new upload_1.Upload().upload;
        this.app.post('/add-article', upload.single('file'), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { tittle, text, img } = req.body;
            const article = {
                tittle,
                text,
                img
            };
            try {
                yield model_1.default.create(article);
                res.status(200).json({ message: 'Artigo criado com sucesso.' });
            }
            catch (error) {
                res.status(501).json({ err: error });
            }
        }));
    }
    routeDelet() {
        this.app.delete('/delete/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const article = model_1.default.findOne({ _id: id });
            try {
                yield model_1.default.deleteOne({ _id: id });
                res.send(202).json({ message: 'apagou tudo' });
            }
            catch (error) {
                res.status(500).json({ message: 'rota errada' });
            }
        }));
    }
}
exports.Route = Route;
