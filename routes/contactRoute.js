const express =require("express");
const router=express.Router();
const {getContacts, getContact, updateContacts, deleteContact, createContact}=require("../controllers/contactControllers")

// router.route("/").get(getContacts);
// router.route("/").post(createContact); can be written as

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContacts).delete(deleteContact)







module.exports=router;