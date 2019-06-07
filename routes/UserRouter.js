let express = require('express');

let userController = require('../controllers/UserController');
let queryParamsMiddleware = require('../middlewares/queryParamsMiddleware');
let isAuthenticatedMiddleware = require('../middlewares/isAuthenticatedMiddleware');
let isAuthorizedMiddleware = require('../middlewares/isRoleAuthorizedMiddleware');

let userRouter = express.Router();
/**
 * @api {post} /api/users/:id User by id
 * @apiVersion 0.1.0
 * @apiName getUser
 * @apiGroup User
 * @apiPermission admin user
 *
 * @apiDescription Returns a list of policies linked to a username.
 *
 *  @apiHeader {String} Authorization users unique token.
 * @apiHeaderExample {json} Header format:
 *     {
 *       "Authorization": "Bearer <token>"
 *     }
 * @apiParam {String} id id of the user.
 *
 * @apiSuccess {String} user returns the user found.
 * @apiSuccessExample {json} Returned payload:
 *     HTTP/1.1 200 OK
 *     {
        "id": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
        "name": "Manning",
        "email": "manningblankenship@quotezart.com",
        "role": "admin"
    }
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
userRouter.get('/users/:id', isAuthenticatedMiddleware, isAuthorizedMiddleware(["user", "admin"]), userController.byId.bind(userController));


/**
 * @api {post} /api/users?username User by username
 * @apiVersion 0.1.0
 * @apiName getUserByName
 * @apiGroup User
 * @apiPermission admin user
 *
 * @apiDescription Returns a list of users user data.
 *
 *  @apiHeader {String} Authorization users unique token.
 * @apiHeaderExample {json} Header format:
 *     {
 *       "Authorization": "Bearer <token>"
 *     }
 * @apiParam {String} username username of the user.
 *
 * @apiSuccess {String} users returns users found.
 * @apiSuccessExample {json} Returned payload:
 *     HTTP/1.1 200 OK
 *     [{
        "id": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
        "name": "Manning",
        "email": "manningblankenship@quotezart.com",
        "role": "admin"
    }]
 *
 * @apiError Not Authenticated   auth failed.
 *
 * @apiErrorExample NotAuthenticated:
 *     HTTP/1.1 401 Not Authenticated
 *
 * @apiError Forbidden   User role is not valid.
 *
 * @apiErrorExample Forbidden:
 *     HTTP/1.1 403 Forbidden
 *
 */
userRouter.get('/users', queryParamsMiddleware, isAuthenticatedMiddleware, isAuthorizedMiddleware(["user", "admin"]), userController.byUsername.bind(userController));

/**
 * @api {post} /api/users?policynumber User by policynumber
 * @apiVersion 0.1.0
 * @apiName getUserByPolicyNumber
 * @apiGroup User
 * @apiPermission admin
 *
 * @apiDescription Returns a user linked to a policynumber.
 *
 *  @apiHeader {String} Authorization users unique token.
 * @apiHeaderExample {json} Header format:
 *     {
 *       "Authorization": "Bearer <token>"
 *     }
 * @apiParam {String} policynumber policynumber of the user.
 *
 * @apiSuccess {String} user           returns user found.
 * @apiSuccessExample {json} Returned payload:
 *     HTTP/1.1 200 OK
 *     {
        "id": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
        "name": "Manning",
        "email": "manningblankenship@quotezart.com",
        "role": "admin"
    }
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
userRouter.get('/users', isAuthenticatedMiddleware, isAuthorizedMiddleware(["admin"]), userController.byPolicyNumber.bind(userController));

module.exports = userRouter;
