const express = require("express");

const router = express.Router();

const { validateBody} = require("../../middlewares");

const { schemas } = require("../../models/order");

const ctrl = require("../../controllers/orders");

router.get("/", ctrl.getAll);

router.post("/", validateBody(schemas.createOrder), ctrl.createNew);



module.exports = router;
