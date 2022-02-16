"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes/routes");
const default_1 = require("./config/default");
const apl = new routes_1.Route().app;
const host = default_1.config.host;
const port = default_1.config.port;
apl.listen(default_1.config.port, () => {
    console.log(`server http://${host}:${port}/ rodando na porta ${port}`);
});
