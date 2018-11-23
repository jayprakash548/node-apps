const appMiddleware = (req, res, next) =>{
    req.user= {
        'firstName': 'Jay Prakash',
        'lastName': 'Kumar'
    }
    next();
}
module.exports = {
    appMiddleware: appMiddleware
}