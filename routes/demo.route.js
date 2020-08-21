const express = require("express");
const router = express.Router();
const demoMiddleware = require('../middlewares/demo.middleware');
const demoController = require('../controllers/demo.controller');

// router middleware
router.use(demoMiddleware.routerMiddleware);

router.get('/', demoController.getHome);

router.get('/about', demoController.getAbout);

router.get("/country/:country/city/:city", demoController.getCountry);

router.get("/users", demoController.getUsers);

router.get("/workers", demoController.getWorkers);

module.exports = router;
