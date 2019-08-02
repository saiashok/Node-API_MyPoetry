
import {Request, Response} from 'express';
import { GetPoemByIdServiceImpl } from '../service/GetPoemByIdServiceImpl';
import { GetPoemsListServiceImpl } from '../service/GetPoemsListServiceImpl';
import { UpdatePoemServiceImpl } from '../service/UpdatePoemServiceImpl';
import { AddPoemServiceImpl } from '../service/AddPoemServiceImpl';
var logger = require('logger').createLogger();

export class ApplicationController{

    public async getPoemById(req: Request, res: Response){
        let poemid = Number(req.params.poemid);
        logger.debug('MyPoetryApp: getPoemById; input- poemid',poemid);
        try {
            let getPoemByIdServiceImpl  = new GetPoemByIdServiceImpl()
            let serviceResponse: any = await getPoemByIdServiceImpl.getPoem(poemid);
        logger.debug('MyPoetryApp: getPoemById; resonse-',poemid);
            res.status(200).send(serviceResponse);
        } catch (error) {
            logger.error('MyPoetryApp: getPoemById; error-',error);
        }
    }

    public async getListOfPoems(req: Request, res: Response){
        try {
            logger.debug('MyPoetryApp: getPoemById; input- poemid');
            let getPoemListServiceImpl  = new  GetPoemsListServiceImpl()
            let serviceResponse: any = await getPoemListServiceImpl.getPoemsList();
            logger.debug('MyPoetryApp: getListOfPoems; resonse-',serviceResponse);
            res.status(200).send(serviceResponse);
        } catch (error) {  
            logger.error('MyPoetryApp: getListOfPoems; error-',error);       
        }
    }

    
    public async addPoemToList(req: Request, res: Response){
        let poem = req.body;
        try {
            logger.debug('MyPoetryApp: addPoemToList; input-',JSON.stringify(poem));
            let addPoemToList  = new  AddPoemServiceImpl()
            let serviceResponse: any = await addPoemToList.addNewPoem(poem);
            logger.debug('MyPoetryApp: addPoemToList; resonse-',serviceResponse);
            if(serviceResponse.poems.result && serviceResponse.poems.result.ok === 1){
                res.status(201).send();
            }else{
                res.status(500).send(serviceResponse);
            }
        } catch (error) {      
            logger.error('MyPoetryApp: addPoemToList; error-',error);   
        }
    }


    public async updatePoem(req: Request, res: Response){

        let poem = req.body;
        try {
            logger.debug('MyPoetryApp: updatePoem; input-',JSON.stringify(poem));
            let updatePoemSericeImpl  = new  UpdatePoemServiceImpl()
            let serviceResponse: any = await updatePoemSericeImpl.editPoem(poem);
            logger.debug('MyPoetryApp: updatePoem; resonse-',serviceResponse);
            if(serviceResponse.poems.result && serviceResponse.poems.result.ok === 1){
                res.status(204).send();
            }else{
                res.status(500).send(serviceResponse);
            }
            
        } catch (error) {   
            logger.error('MyPoetryApp: updatePoem; error-',error);      
        }
    }

}