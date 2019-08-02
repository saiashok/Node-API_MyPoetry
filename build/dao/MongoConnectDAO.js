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
const mongodb_1 = require("mongodb");
var logger = require('logger').createLogger();
class MongoConnectDAO {
    establishConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            let client;
            try {
                let uri = "mongodb+srv://developer:developer@mycluster-eak33.mongodb.net/test?retryWrites=true&w=majority";
                client = yield mongodb_1.MongoClient.connect(uri, { useNewUrlParser: true });
                MongoConnectDAO.poemCollection = client.db("whisphersofthewind_db").collection("poetry");
                logger.info('Connection to Mongodb- Successful.');
                return true;
            }
            catch (error) {
                logger.error('Connection to Mongodb- Unsuccessful.', error);
                return false;
            }
        });
    }
    getPoemById(poemid) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info('<<<<<<DAO getPoemById initiated>>>>>>');
            return new Promise((resolve, reject) => {
                MongoConnectDAO.poemCollection.findOne({ "poemid": poemid }, function (err, doc) {
                    if (doc) {
                        delete doc._id;
                        resolve(doc);
                    }
                    else {
                        reject(new Error("500"));
                    }
                });
            });
        });
    }
    getPoems() {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info('<<<<<<DAO getPoems initiated>>>>>>');
            return new Promise((resolve, reject) => {
                MongoConnectDAO.poemCollection.find({}).toArray(function (err, doc) {
                    if (doc) {
                        doc.forEach((element) => {
                            delete element._id;
                        });
                        resolve(doc);
                    }
                    else {
                        reject(new Error("500"));
                    }
                });
            });
        });
    }
    addPoem(poem) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info('<<<<<<DAO addPoem initiated>>>>>>');
            return new Promise((resolve, reject) => {
                MongoConnectDAO.poemCollection.insertOne(poem, function (err, doc) {
                    if (!err) {
                        resolve(doc);
                    }
                    else {
                        reject(new Error("500"));
                    }
                });
            });
        });
    }
    updatePoem(poem) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info('<<<<<<DAO updatePoem initiated>>>>>>');
            return new Promise((resolve, reject) => {
                MongoConnectDAO.poemCollection.updateOne({ 'poemid': poem.poemid }, { $set: poem }, function (err, doc) {
                    if (!err) {
                        resolve(doc);
                    }
                    else {
                        reject(new Error("500"));
                    }
                });
            });
        });
    }
}
MongoConnectDAO.poemCollection = {};
exports.MongoConnectDAO = MongoConnectDAO;
//# sourceMappingURL=MongoConnectDAO.js.map