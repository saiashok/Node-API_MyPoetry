"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ApplicationRoutes_1 = require("./routes/ApplicationRoutes");
const MongoConnectDAO_1 = require("./dao/MongoConnectDAO");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.app = express();
        this.routesList = new ApplicationRoutes_1.ApplicationRoutes();
        this.mongoConnection = new MongoConnectDAO_1.MongoConnectDAO();
    }
    appConstruct() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.config();
            yield this.mongoConnection.establishConnection();
            this.routesList.routes(this.app);
        });
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.use(bodyParser.json());
            this.app.use(bodyParser.urlencoded({ extended: true }));
            this.app.use(express.static('public'));
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map