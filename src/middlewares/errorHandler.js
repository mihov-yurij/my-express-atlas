module.exports = (err, req, res, next) => {
    console.error(err.stack); 
    const status = err.status || 500;
    const message = err.message || "Something went wrong on the server";
    res.status(status).send(`Error ${status}: ${message}`);
};