import express = require("express");
import {Request, Response} from "express";
import { ApplicationController } from "../controller/ApplicationController";
var logger = require('logger').createLogger();

export class ApplicationRoutes{

    public async routes(app: express.Application){
        logger.info('Routing module instantiated..')
        app.route("/ping").get((req:Request, res:Response)=>{
            res.header({"Content-type":"application/json"});
            res.status(200).send({"status": "Application running..!"});
        });
        let applicationController = new ApplicationController();
        app.route('/getpoembyid/:poemid').get(applicationController.getPoemById);
        app.route('/getpoems').get(applicationController.getListOfPoems);
        app.route('/uploadpoem').post(applicationController.addPoemToList);
        app.route('/editpoem').put(applicationController.updatePoem);
    }
}