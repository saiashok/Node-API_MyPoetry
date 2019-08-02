import { MongoConnectDAO } from "../dao/MongoConnectDAO";
var logger = require('logger').createLogger();

export class AddPoemServiceImpl {

    public async addNewPoem(poem : any): Promise<any> {
        logger.info('MyPoetryApp: addNewPoem service; input-',poem);
        let mongoConnectDAO = new MongoConnectDAO();
        let response: any = await mongoConnectDAO.addPoem(poem);
        logger.debug('MyPoetryApp: addNewPoem service; response-',JSON.stringify(response));
        let apiresponse = <any>{};
        apiresponse.poems = response;   
        return apiresponse;
    }
}