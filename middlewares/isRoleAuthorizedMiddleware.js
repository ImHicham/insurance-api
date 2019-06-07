/**
 * check user roles against the array of roles we pass
 * @param rolesToMatch
 */
module.exports = (rolesToMatch) => {


    return (req, res, next) => {
        if (req.decoded != undefined && req.decoded.data.role != undefined) {
            const userRoles = req.decoded.data.role;
            const rolesFound = rolesToMatch.filter((role) => userRoles.indexOf(role) > -1);
            if (rolesFound.length > 0)
                next();
            else
                res.send(403);
        } else {
            res.send(403);
        }
    }

};
