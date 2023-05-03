const Router = require("express");
const userRouter = require("./userRoutes");
const videoRouter = require("./videoRoutes");
const commentRouter = require("./commentRoutes");

const router = new Router();

router.use("/users", userRouter);
router.use("/", videoRouter);
router.use("/comments", commentRouter);
module.exports = router;
