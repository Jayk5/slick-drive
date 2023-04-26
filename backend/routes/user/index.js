const router = require("express").Router();
const { registerUser, loginUser, getUser, logoutUser } = require("./controllers");
const { isLoggedIn } = require("../../middlewares");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", isLoggedIn, getUser);
router.get("/logout", isLoggedIn, logoutUser);

module.exports = router;
