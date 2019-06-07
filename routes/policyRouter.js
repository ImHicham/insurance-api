let express = require('express');

let policyController = require('../controllers/PolicyController');
let isAuthenticatedMiddleware = require('../middlewares/isAuthenticatedMiddleware');
let isAuthorizedMiddleware = require('../middlewares/isRoleAuthorizedMiddleware');

let policyRouter = express.Router();

/**
 * @api {post} /api/policies?username= Policies by username
 * @apiVersion 0.1.0
 * @apiName getPolicies
 * @apiGroup Policies
 * @apiPermission admin
 *
 * @apiDescription Returns a list of policies linked to a username.
*  @apiHeader {String} Authorization users unique token.
 * @apiHeaderExample {json} Header format:
 *     {
 *       "Authorization": "Bearer <token>"
 *     }
 * @apiParam {String} username           username of the user.
 *
 * @apiSuccess {String} policies           a list of policies.
 * @apiSuccessExample {json} Payload returned:
 *     HTTP/1.1 200 OK
 *     [{
 *       id: "0e1cc872-0ca8-4bc0-ad4a-431b4df88289",
        amountInsured: 2952.32,
        email: "inesblankenship@quotezart.com",
        inceptionDate: "2014-07-14T10:51:33Z",
        installmentPayment: false,
        clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
 *     }]
 *
 * @apiError NotAuthenticated   auth failed.
 *
 * @apiErrorExample Not Authenticated:
 *     HTTP/1.1 401 Not Authenticated
 *
 * @apiError Forbidden   User role is not valid.
 *
 * @apiErrorExample Forbidden:
 *     HTTP/1.1 403 Forbidden
 *
 */
policyRouter.get('/policies', isAuthenticatedMiddleware, isAuthorizedMiddleware(["admin"]), policyController.byUsername.bind(policyController));

module.exports = policyRouter;
