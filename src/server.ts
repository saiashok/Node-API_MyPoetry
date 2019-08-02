import * as app from './app';
const PORT = 8080;

startServer();

async function startServer() {

    let poemApp = new app.App();
    await poemApp.appConstruct();
    poemApp.app.listen(PORT, () => {
        console.log("Express Server listening on PORT ", PORT);
    });

}