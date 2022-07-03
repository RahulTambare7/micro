const studentInfoServlets = require('../servlets/studentInfo');
const express = require('express');
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const router = express.Router();
router.get("/:id",studentInfoServlets.getData); // return data ;
router.post("/addDetails",studentInfoServlets.addDetails);// insert data 
router.put("/editDetails",studentInfoServlets.editDetails);// update hole resource with all given data which are present in db with all
router.patch("/updateDetails",studentInfoServlets.updateDetails);// update data which is need to be update 
module.exports = router;