const appConfig = {} // Object

appConfig.port = 3000;
appConfig.allowedcorsorigin = '*';
appConfig.env = 'dev';
appConfig.db = {
    uri: 'mongodb://127.0.0.1:27017/blogAppDB'
}
appConfig.apiVersion = '/api/v1';

module.exports = {
    port: appConfig.port,
    allowedcorsorigin: appConfig.allowedcorsorigin,
    env:  appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion
}// End Module Exports