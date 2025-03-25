"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicProcedure = exports.router = void 0;
const server_1 = require("@trpc/server");
const t = server_1.initTRPC
    .context()
    .create();
exports.router = t.router; // this is similar to app in trpc which we export and then do app.get or app.post
exports.publicProcedure = t.procedure;
