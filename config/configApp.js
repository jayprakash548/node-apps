const appConfig = {} // Object

appConfig.port = 3000;
appConfig.allowedcorsorigin = '*';
appConfig.env = 'dev';
appConfig.db = {
    // url = 'mongodb://localhost:3000/mydatabase';
}
appConfig.apiVersion = '/api/v1';

module.exports = {
    port: appConfig.port,
    allowedcorsorigin: appConfig.allowedcorsorigin,
    env:  appConfig.env,
    // db: appConfig.db,
    apiVersion: appConfig.apiVersion
}// End Module Exports