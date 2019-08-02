import { MongoConnectDAO } from "../dao/MongoConnectDAO";
import {IPoem} from "../models/IPoemModel"
var logger = require('logger').createLogger();

export class GetPoemByIdServiceImpl{

private mongoConnectDAO = new MongoConnectDAO();

public async getPoem(poemid: number): Promise<IPoem | undefined>{
   logger.info('MyPoetryApp: getPoemById service; input: poemId - '+poemid);
   let   response : any = await this.mongoConnectDAO.getPoemById(poemid);
   response = JSON.parse(JSON.stringify(response));
   logger.debug('MyPoetryApp: getPoemById service; response: for poemId - '+poemid + '-'+ JSON.stringify(response));
   let  poem: IPoem = response;
    return poem;
    }
}