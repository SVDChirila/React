const errorHandler =(req, res, next) => {
    res.status(400).send('ERROR 404: ====Bad Request!====');
  };

module.exports = { errorHandler }