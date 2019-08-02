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
const GetPoemByIdServiceImpl_1 = require("../service/GetPoemByIdServiceImpl");
const GetPoemsListServiceImpl_1 = require("../service/GetPoemsListServiceImpl");
const UpdatePoemServiceImpl_1 = require("../service/UpdatePoemServiceImpl");
const AddPoemServiceImpl_1 = require("../service/AddPoemServiceImpl");
var logger = require('logger').createLogger();
class ApplicationController {
    getPoemById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let poemid = Number(req.params.poemid);
            logger.debug('MyPoetryApp: getPoemById; input- poemid', poemid);
            try {
                let getPoemByIdServiceImpl = new GetPoemByIdServiceImpl_1.GetPoemByIdServiceImpl();
                let serviceResponse = yield getPoemByIdServiceImpl.getPoem(poemid);
                logger.debug('MyPoetryApp: getPoemById; resonse-', poemid);
                res.status(200).send(serviceResponse);
            }
            catch (error) {
                logger.error('MyPoetryApp: getPoemById; error-', error);
            }
        });
    }
    getListOfPoems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger.debug('MyPoetryApp: getPoemById; input- poemid');
                let getPoemListServiceImpl = new GetPoemsListServiceImpl_1.GetPoemsListServiceImpl();
                let serviceResponse = yield getPoemListServiceImpl.getPoemsList();
                logger.debug('MyPoetryApp: getListOfPoems; resonse-', serviceResponse);
                res.status(200).send(serviceResponse);
            }
            catch (error) {
                logger.error('MyPoetryApp: getListOfPoems; error-', error);
            }
        });
    }
    addPoemToList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let poem = req.body;
            try {
                logger.debug('MyPoetryApp: addPoemToList; input-', JSON.stringify(poem));
                let addPoemToList = new AddPoemServiceImpl_1.AddPoemServiceImpl();
                let serviceResponse = yield addPoemToList.addNewPoem(poem);
                logger.debug('MyPoetryApp: addPoemToList; resonse-', serviceResponse);
                if (serviceResponse.poems.result && serviceResponse.poems.result.ok === 1) {
                    res.status(201).send();
                }
                else {
                    res.status(500).send(serviceResponse);
                }
            }
            catch (error) {
                logger.error('MyPoetryApp: addPoemToList; error-', error);
            }
        });
    }
    updatePoem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let poem = req.body;
            try {
                logger.debug('MyPoetryApp: updatePoem; input-', JSON.stringify(poem));
                let updatePoemSericeImpl = new UpdatePoemServiceImpl_1.UpdatePoemServiceImpl();
                let serviceResponse = yield updatePoemSericeImpl.editPoem(poem);
                logger.debug('MyPoetryApp: updatePoem; resonse-', serviceResponse);
                if (serviceResponse.poems.result && serviceResponse.poems.result.ok === 1) {
                    res.status(204).send();
                }
                else {
                    res.status(500).send(serviceResponse);
                }
            }
            catch (error) {
                logger.error('MyPoetryApp: updatePoem; error-', error);
            }
        });
    }
}
exports.ApplicationController = ApplicationController;
//# sourceMappingURL=ApplicationController.js.map