let express = require('express');
let authRouter = express.Router();

let authController = require('../controllers/AuthController');

/**
 * @api {post} /api/auth User authentication
 * @apiVersion 0.1.0
 * @apiName authUser
 * @apiGroup Auth
 * @apiPermission all
 *
 * @apiDescription Simulates authenticating a user against the system and returning a valid token
 *
 * @apiParam {String} id of the user.
 *
 * @apiParamExample {json} Payload example:
 *     {
 *       "id": "a0ece5db-cd14-4f21-812f-966633e7be86"
 *     }
 *
 * @apiSuccess {String} token           a token.
 *
 * @apiSuccessExample {json} Returned payload:
 *     HTTP/1.1 200 OK
 *   {
 *      "token": "lwQHF1X0.W4owcdUa_oyGj8mUFEee05bEmDsJfuoPIvW4pdiv0UY"
 *   }
 *
 * @apiError AuthError   auth failed.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 */

authRouter.post('/auth', authController.auth.bind(authController));

module.exports = authRouter;
