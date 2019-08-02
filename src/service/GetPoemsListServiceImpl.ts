import { MongoConnectDAO } from "../dao/MongoConnectDAO";
import { IPoemList } from "src/models/IPoemListModel";
var logger = require('logger').createLogger();

export class GetPoemsListServiceImpl {

    private mongoConnectDAO = new MongoConnectDAO();

    public async getPoemsList(): Promise<any> {
        logger.info('MyPoetryApp: getPoemsList service');
        let response: IPoemList = await this.mongoConnectDAO.getPoems();
        logger.debug('MyPoetryApp: getPoemsList service; response - ', response);
        let apiresponse = <any>{};
        apiresponse.poems = response;
        return apiresponse;
    }
}