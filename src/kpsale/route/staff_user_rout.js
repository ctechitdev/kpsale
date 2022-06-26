const { Router } = require("express");

const controller = require('../controller/staff_user_controller');



const router = Router();

router.get("/staff", controller.getStaffUser);

module.exports = router;
