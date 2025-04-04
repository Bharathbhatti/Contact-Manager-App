const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  updatetContact,
  deleteContact,
  createContact,
} = require("../controllers/contactConroller.js");

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updatetContact).delete(deleteContact);

module.exports = router;
