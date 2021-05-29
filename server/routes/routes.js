const express = require("express");
const services = require('../services/render')
const controller = require('../controller/controller')

const router = express.Router();

/*
@description HomeRoute
@method GET
*/
router.get("/", services.homeRoutes);

/*
@description addUserRoute
@method GET
*/
router.get("/add-user", services.addUserRoutes);

/*
@description updateUserRoute
@method GET
*/
router.get("/update-user", services.updateUserRoutes);

/*
@description API
@method POST
*/
router.post('/api/users', controller.create)
router.get('/api/users', controller.find)
router.put('/api/users/:id', controller.update)
router.delete('/api/users/:id', controller.delete)


module.exports = router;
