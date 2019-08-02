import express = require('express');
import { ApplicationRoutes } from "./routes/ApplicationRoutes";
import { MongoConnectDAO } from './dao/MongoConnectDAO';
import bodyParser = require('body-parser');

export class App {

    public app: express.Application = express();
    public routesList: ApplicationRoutes = new ApplicationRoutes();
    public mongoConnection: MongoConnectDAO = new MongoConnectDAO();

    public async appConstruct(): Promise<void> {
       await  this.config();
       await this.mongoConnection.establishConnection();
        this.routesList.routes(this.app);
    }

    public async config(): Promise<void>{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(express.static('public'));
        this.app.use(function(req, res, next) {
            if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
                res.redirect('https://' + req.get('Host') + req.url);
            }
            else
                next();
        });
    }
}