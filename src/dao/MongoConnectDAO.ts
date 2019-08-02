import { MongoClient, Collection } from 'mongodb';
var logger = require('logger').createLogger();

export class MongoConnectDAO {
    private static poemCollection: Collection = <Collection>{};
    
    
    public async establishConnection(): Promise<boolean> {
        let client;
        try {
            let uri: string = "mongodb+srv://xxxx:xxxxx@mycluster-eak33.mongodb.net/test?retryWrites=true&w=majority";
            client = await MongoClient.connect(uri, { useNewUrlParser: true });
            MongoConnectDAO.poemCollection = client.db("whisphersofthewind_db").collection("poetry");
            logger.info('Connection to Mongodb- Successful.');
            return true;
        } catch (error) {
            logger.error('Connection to Mongodb- Unsuccessful.', error);
            return false;
        }
    }

    public async getPoemById(poemid: number): Promise<any> {
        logger.info('<<<<<<DAO getPoemById initiated>>>>>>');
        return new Promise((resolve, reject) => {
            MongoConnectDAO.poemCollection.findOne({ "poemid": poemid }, function (err, doc) {
                if (doc) {
                    delete doc._id;
                    resolve(doc);
                } else {
                    reject(new Error("500"));
                }
            });
        });
    }

    public async getPoems(): Promise<any> {
        logger.info('<<<<<<DAO getPoems initiated>>>>>>');
        return new Promise((resolve, reject) => {
            MongoConnectDAO.poemCollection.find({}).toArray(function (err, doc) {
                if (doc) {

                    doc.forEach((element: any) => {
                        delete element._id;
                    });
                    resolve(doc);
                } else {
                    reject(new Error("500"));
                }
            });
        });
    }

    public async addPoem(poem: any): Promise<any> {
        logger.info('<<<<<<DAO addPoem initiated>>>>>>');
        return new Promise((resolve, reject) => {
            MongoConnectDAO.poemCollection.insertOne(poem, function (err, doc) {
                if (!err) {
                    resolve(doc);
                } else {
                    reject(new Error("500"));
                }
            });
        });
    }


    public async updatePoem(poem: any): Promise<any> {
        logger.info('<<<<<<DAO updatePoem initiated>>>>>>');
        return new Promise((resolve, reject) => {
            MongoConnectDAO.poemCollection.updateOne({ 'poemid': poem.poemid }, { $set: poem }, function (err: any, doc: unknown) {
                if (!err) {
                    resolve(doc);
                } else {
                    reject(new Error("500"));
                }
            });
        });
    }

}
