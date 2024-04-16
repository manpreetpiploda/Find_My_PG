const express = require('express');
const router = express.Router();
const User = require('../Models/User');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const { request } = require('express');
const jwt_secret = "$Thisisusedtosecuredata"
const  fetchuser  = require('../middleware/fetchuser');


// Create New User
router.post('/createuser', [

    // Condition for Checking email ,password and name using 'npm package validator'
    body('email', 'Enter a Vaild Email').isEmail()
], async (req, res) => {
    let success = false;
    // Validation to check email , password and name is correct or not using 'npm package validator'
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: success, errors: errors.array() });
    }
    try {
        // this is used to check User is already present or not in database
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success: success, error: "User with this Email Already Exist" });
        }

        // Adding Salt in password From 'npm package bcrypt'
        const salt = await bcrypt.genSalt(10);
        const securepassword = await bcrypt.hash(req.body.password, salt);

        // User is not present in Database Then Creating a User 
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securepassword
        })

        // This is used to Create Auth Token using 'npm package jsonwebtoken'
        const data = {
            user: {
                id: user._id
            }
        }

        // Adding secret code into Token to check when some one change the token value
        const token = jwt.sign(data, jwt_secret);
        success = true;
        return res.json({ success: success, token: token });


    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: success, error: "Some Error Occured" });
    }
})

router.post('/login', [
    // Condition for Checking email and password  using 'npm package validator'
    body('email', 'Enter a Vaild Email').isEmail(),
    body('password', "Password is Too Short").isLength({ min: 1 })
], async (req, res) => {
    let success = false;

    // Validation to check email , password and name is correct or not using 'npm package validator'
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: success, errors: errors.array() });
    }

    try {
        //  To check Email is present in database or not
        let user = await User.findOne({ email: req.body.email });

        // if user does not exist
        if (!user) {
            return res.status(400).json({ success: success, error: "Please Provide Vaild Email" });
        }

        // checking password is correct or not 
        const passwordCheck = await bcrypt.compare(req.body.password, user.password);

        // If password does not match  
        if (!passwordCheck) {
            return res.status(400).json({ success: success, error: "Please Enter Correct password" });
        }

        // Creating an token  
        const data = {
            user: {
                id: user._id
            }
        }
        const token = jwt.sign(data, jwt_secret);

        success = true;
        return res.json({ success: success, token: token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: success, error: "Some Error Occured" });
    }

});


router.get('/getuser',fetchuser,async(req,res)=>{
    try {
        const Userid = req.user._id;
        const user = await User.findOne({Userid}).select("-password");
        res.send(user);
    }
    catch(e){
        console.error(error);
        return res.status(500).send("Some Error Occured");
    }
})




module.exports = router;