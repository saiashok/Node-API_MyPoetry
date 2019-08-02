import { MongoConnectDAO } from "../dao/MongoConnectDAO";
var logger = require('logger').createLogger();

export class UpdatePoemServiceImpl {

private mongoConnectDAO = new MongoConnectDAO();

    public async editPoem(poem : any): Promise<any> {
        logger.info('MyPoetryApp: editPoem service; input: poem - '+ JSON.stringify(poem));
        let response: any = await this.mongoConnectDAO.updatePoem(poem);
        logger.debug('MyPoetryApp: editPoem service; response - '+ JSON.stringify(response));
        let apiresponse = <any>{};
        apiresponse.poems = response;
        return apiresponse;
    }
}