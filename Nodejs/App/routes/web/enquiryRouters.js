let express = require("express");
const { enquiryInsert } = require("../../Controllers/web/enquiryController");
let enqiuryRouter = express.Router();

enqiuryRouter.post("/insert", enquiryInsert)

module.exports = enqiuryRouter;