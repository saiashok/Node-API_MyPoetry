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
const MongoConnectDAO_1 = require("../dao/MongoConnectDAO");
var logger = require('logger').createLogger();
class UpdatePoemServiceImpl {
    constructor() {
        this.mongoConnectDAO = new MongoConnectDAO_1.MongoConnectDAO();
    }
    editPoem(poem) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info('MyPoetryApp: editPoem service; input: poem - ' + JSON.stringify(poem));
            let response = yield this.mongoConnectDAO.updatePoem(poem);
            logger.debug('MyPoetryApp: editPoem service; response - ' + JSON.stringify(response));
            let apiresponse = {};
            apiresponse.poems = response;
            return apiresponse;
        });
    }
}
exports.UpdatePoemServiceImpl = UpdatePoemServiceImpl;
//# sourceMappingURL=UpdatePoemServiceImpl.js.map