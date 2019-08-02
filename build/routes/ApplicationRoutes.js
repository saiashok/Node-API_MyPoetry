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
const ApplicationController_1 = require("../controller/ApplicationController");
var logger = require('logger').createLogger();
class ApplicationRoutes {
    routes(app) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info('Routing module instantiated..');
            app.route("/ping").get((req, res) => {
                res.header({ "Content-type": "application/json" });
                res.status(200).send({ "status": "Application running..!" });
            });
            let applicationController = new ApplicationController_1.ApplicationController();
            app.route('/getpoembyid/:poemid').get(applicationController.getPoemById);
            app.route('/getpoems').get(applicationController.getListOfPoems);
            app.route('/uploadpoem').post(applicationController.addPoemToList);
            app.route('/editpoem').put(applicationController.updatePoem);
        });
    }
}
exports.ApplicationRoutes = ApplicationRoutes;
//# sourceMappingURL=ApplicationRoutes.js.map