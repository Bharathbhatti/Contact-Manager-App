const asyncHandler = require('express-async-handler');
const Contact=require('../models/contactModel');
//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts=asyncHandler(async(req, res) => {
    const contacts=await Contact.find();
    res.status(200).json(contacts);
})

//@desc Create new contacts
//@route POST /api/contacts
//@access Public
const createContact=asyncHandler(async(req, res) => {
    console.log("the request body is", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error('Please add all fields');
    }
    const contact=await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
})

//@desc Get contact by ID
//@route GET /api/contacts/:id
//@access Public
const getContact=asyncHandler(async(req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('Contact not found');
    }
    res.status(200).json(contact);
})

//@desc Update Contact by ID
//@route PUT /api/contacts/:id
//@access Public
const updatetContact=asyncHandler(async(req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('Contact not found');
    }
    const updatedContact=await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    });
    res.status(200).json(updatedContact);
})

//@desc Delete contact by ID
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact=asyncHandler(async(req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('Contact not found');
    }
    await Contact.deleteOne();
    res.status(200).json(contact);
})

module.exports={
    getContact,
    getContacts,
    createContact,
    updatetContact,
    deleteContact
};