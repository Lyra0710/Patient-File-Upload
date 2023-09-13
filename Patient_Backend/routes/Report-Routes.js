const router = require("express").Router();
const { check } = require("express-validator");
const reportControllers = require("../controllers/Report-Controllers");
const fileUpload = require("../middleware/File-Upload");
router.get("/get", reportControllers.getReport);
router.get("/get/:id", reportControllers.getReportbyID);
router.post(
  "/post",fileUpload.array("images",5),
  [
    check("name").notEmpty(),
    check("age").notEmpty(),
    check("gender").notEmpty(),
  ],
  
  reportControllers.createReport
);
module.exports = router;
