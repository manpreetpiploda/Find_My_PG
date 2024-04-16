const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Pg_Owners = require('../Models/Pg_Owners');
const { body} = require('express-validator');


// // Route 1 : This is used for adding owners details
router.post('/add_owner',fetchuser, async (req, res) => {
    
    let success = false;

        try {
            const Owner_detail = await Pg_Owners.create({
                name: req.body.name,
                email: req.body.email,
                contactno1: req.body.contactno1,
                contactno2: req.body.contactno2,
                addharnumber: req.body.addharnumber,
                pg_name: req.body.pg_name,
                user: req.user.id
            });
            
             success = true;
            return res.json({ success: success, Owner_detail: Owner_detail });
        } catch (error) {
            console.error(error);
            return res.status(500).send({success: false,error:"Some Error Occured"});
        }
    });


    // router.get('get_owner',fetchuser,async(req,res)=>{


    // })

    
module.exports = router;