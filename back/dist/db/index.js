"use strict";
// db alaways in another place to jab bhi ise karna hoto time lagega time lagega ->
// time -- >  await
//write effi => (()={})()
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const constant_1 = require("../constant");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const ConnectDB = async () => {
    try {
        await mongoose_1.default.connect(`${process.env.MONGODB_URL}/${constant_1.DB_NAME}`);
        app.on("error", (erro) => {
            new Error("error in db connection");
        });
        app.listen(process.env.PORT, () => {
            console.log(`app is running on port ${process.env.PORT}`);
        });
    }
    catch (error) { }
};
exports.default = ConnectDB;
