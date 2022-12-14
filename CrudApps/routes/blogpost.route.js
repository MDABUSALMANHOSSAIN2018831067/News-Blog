const express = require("express");

const {getBlogPostPage, postBlogPost, getAllBlogpost, getBlogpost, updateBlogPost, deleteBlogPost, getSpecificUserBlogpost} = require("../controllers/blogpost.controller");
const { checkLogin } = require("../middleware/authenticateLogin.middleware");
const  CheckCache  = require("../middleware/cache.middleware");

const router = express.Router();

// get blogpost page
router.get("/post/blogpost", checkLogin ,getBlogPostPage);

// create news
router.post("/blogpost", checkLogin, postBlogPost);

// news from everyone
router.get("/allblogpost", checkLogin, CheckCache(5), getAllBlogpost);

// news from user himself
router.get("/blogpost", checkLogin, CheckCache(5), getBlogpost);

// news from specific user
router.get("/blogpost/:username", checkLogin, CheckCache(5),getSpecificUserBlogpost);

// update news
router.put("/blogpost", checkLogin, updateBlogPost);

// delete news
router.delete("/blogpost", checkLogin, deleteBlogPost);

module.exports = router;