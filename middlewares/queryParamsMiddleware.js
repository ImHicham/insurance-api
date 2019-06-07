/**
 * middleware created to map query params between routes
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
    if(req.query.policynumber != undefined)
        next('route');
    else if (req.query.username != undefined)
        next();
    else
        res.sendStatus(400);
}
