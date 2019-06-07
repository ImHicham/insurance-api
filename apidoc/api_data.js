define({ "api": [
  {
    "type": "post",
    "url": "/api/auth",
    "title": "User authentication",
    "version": "0.1.0",
    "name": "authUser",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "description": "<p>Simulates authenticating a user against the system and returning a valid token</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Payload example:",
          "content": "{\n  \"id\": \"a0ece5db-cd14-4f21-812f-966633e7be86\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>a token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Returned payload:",
          "content": "  HTTP/1.1 200 OK\n{\n   \"token\": \"lwQHF1X0.W4owcdUa_oyGj8mUFEee05bEmDsJfuoPIvW4pdiv0UY\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthError",
            "description": "<p>auth failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated",
          "type": "json"
        }
      ]
    },
    "filename": "routes/AuthRouter.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/policies?username=",
    "title": "Policies by username",
    "version": "0.1.0",
    "name": "getPolicies",
    "group": "Policies",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Returns a list of policies linked to a username.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header format:",
          "content": "{\n  \"Authorization\": \"Bearer <token>\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "policies",
            "description": "<p>a list of policies.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Payload returned:",
          "content": "HTTP/1.1 200 OK\n[{\n  id: \"0e1cc872-0ca8-4bc0-ad4a-431b4df88289\",\n    amountInsured: 2952.32,\n    email: \"inesblankenship@quotezart.com\",\n    inceptionDate: \"2014-07-14T10:51:33Z\",\n    installmentPayment: false,\n    clientId: \"e8fd159b-57c4-4d36-9bd7-a59ca13057bb\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>auth failed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>User role is not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not Authenticated:",
          "content": "HTTP/1.1 401 Not Authenticated",
          "type": "json"
        },
        {
          "title": "Forbidden:",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        }
      ]
    },
    "filename": "routes/policyRouter.js",
    "groupTitle": "Policies"
  },
  {
    "type": "post",
    "url": "/api/users/:id",
    "title": "User by id",
    "version": "0.1.0",
    "name": "getUser",
    "group": "User",
    "permission": [
      {
        "name": "admin user"
      }
    ],
    "description": "<p>Returns a list of policies linked to a username.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header format:",
          "content": "{\n  \"Authorization\": \"Bearer <token>\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>returns the user found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Returned payload:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"e8fd159b-57c4-4d36-9bd7-a59ca13057bb\",\n    \"name\": \"Manning\",\n    \"email\": \"manningblankenship@quotezart.com\",\n    \"role\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>auth failed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>User role is not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not Authenticated:",
          "content": "HTTP/1.1 401 Not Authenticated",
          "type": "json"
        },
        {
          "title": "Forbidden:",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        }
      ]
    },
    "filename": "routes/UserRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users?username",
    "title": "User by username",
    "version": "0.1.0",
    "name": "getUserByName",
    "group": "User",
    "permission": [
      {
        "name": "admin user"
      }
    ],
    "description": "<p>Returns a list of users user data.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header format:",
          "content": "{\n  \"Authorization\": \"Bearer <token>\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users",
            "description": "<p>returns users found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Returned payload:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"e8fd159b-57c4-4d36-9bd7-a59ca13057bb\",\n    \"name\": \"Manning\",\n    \"email\": \"manningblankenship@quotezart.com\",\n    \"role\": \"admin\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Not",
            "description": "<p>Authenticated   auth failed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>User role is not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotAuthenticated:",
          "content": "HTTP/1.1 401 Not Authenticated",
          "type": "json"
        },
        {
          "title": "Forbidden:",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        }
      ]
    },
    "filename": "routes/UserRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users?policynumber",
    "title": "User by policynumber",
    "version": "0.1.0",
    "name": "getUserByPolicyNumber",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Returns a user linked to a policynumber.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header format:",
          "content": "{\n  \"Authorization\": \"Bearer <token>\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "policynumber",
            "description": "<p>policynumber of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>returns user found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Returned payload:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"e8fd159b-57c4-4d36-9bd7-a59ca13057bb\",\n    \"name\": \"Manning\",\n    \"email\": \"manningblankenship@quotezart.com\",\n    \"role\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>auth failed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>User role is not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not Authenticated:",
          "content": "HTTP/1.1 401 Not Authenticated",
          "type": "json"
        },
        {
          "title": "Forbidden:",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        }
      ]
    },
    "filename": "routes/UserRouter.js",
    "groupTitle": "User"
  }
] });
