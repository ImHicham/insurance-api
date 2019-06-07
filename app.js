// BASE SETUP
// =============================================================================

// call the packages we need
let express    = require('express');
let app        = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
let usersApi = require("./routes/UserRouter");
let policiesApi = require("./routes/PolicyRouter");
let authApi = require("./routes/AuthRouter");


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', usersApi);
app.use('/api', policiesApi);
app.use('/api', authApi);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.senStatus(500);
})

// START THE SERVER
// =============================================================================
app.listen(port, () => {
    console.log(`server running on ${port}`);
});

