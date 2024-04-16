const express = require('express');
// const { model } = require('mongoose');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Contact_form = require('../Models/Contact_form');
const { body} = require('express-validator');




// // Route 1 : This is used for adding Notes
router.post('/form',fetchuser, async (req, res) => {
    
    let success = false;
        try {
            const note = await Contact_form.create({
                name: req.body.name,
                email: req.body.email,
                mobile_no: req.body.mobile_no,
                city: req.body.city,
                enquiry_type: req.body.enquiry_type,
                message: req.body.message,
                user: req.user.id
            });
            
             success = true;
            return res.json({ success: success, note: note });
        } catch (error) {
            console.error(error);
            return res.status(500).send({success: false,error:"Some Error Occured"});
        }
    });


    
module.exports = router;