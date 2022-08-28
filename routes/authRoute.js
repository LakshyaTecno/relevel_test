
const authController = require("../controllers/auth.controller");

// const {verifySignUp} = require("../middlewares/verifySignup");
/**
 * Define for the user creation
 */

module.exports = (app) =>{
    app.post("/EhaNoti/api/v1/auth/signup", authController.signup);
    app.post("/EhaNoti/api/v1/auth/signin", authController.signin);
}