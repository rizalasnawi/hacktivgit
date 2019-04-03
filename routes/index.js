const Controller = require('../controller/controller');
const router = require('express').Router();



router.get('/users', Controller.getRepos);
router.get('/search/:username', Controller.findUser);
router.post('/users', Controller.createRepos);
router.delete('/users/:owner/:repoName', Controller.deleteRepos);
router.get('/starred/:username', Controller.starredRepos);
router.get('/unstarred/:owner/:repoName', Controller.unstarRepos);



module.exports = router

