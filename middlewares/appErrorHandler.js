const errorHandler = (err, req, res, next) =>{
    console.log('application error handler called');
    console.log(err);
    res.send('Error occurs!')
}

const notFoundHandler = (req, res, next) =>{
    console.log('application Not Found handler called');
    res.status(404).send('Route Not Found in the Application');
}
module.exports = {
    errorHandler: errorHandler,
    notFoundHandler: notFoundHandler
}