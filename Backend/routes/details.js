const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Details = require('../Models/Details');

// const Notes = require('../Models/Notes');

// This is used to add Details To Database
// /api/details
router.post('/addDetails', fetchuser, async (req, res) => {

    try {
        // To fetch all values From body
        const userdeatils = await Details.create({
            // user: req.user.id,
            id: req.body.id,
            src1: req.body.src1,
            src2: req.body.src2,
            src3: req.body.src3,
            src4: req.body.src4,
            src5: req.body.src5,
            src6: req.body.src6,
            src7: req.body.src7,
            src8: req.body.src8,
            src9: req.body.src9,
            src10: req.body.src10,
            src11: req.body.src11,
            src12: req.body.src12,

            pg_name: req.body.pg_name,
            Gender: req.body.Gender,
            Address: req.body.Address,
            Price: req.body.Price,
            city: req.body.city,
            pincode: req.body.pincode,
            Food_available: req.body.Food_available,
            desc: req.body.desc,
            area: req.body.area,
            ac_room: req.body.ac_room,
            parking: req.body.parking,
            power_backup: req.body.power_backup,
            available_for: req.body.available_for,
            preferred_tenants: req.body.preferred_tenants,
            no_of_beds: req.body.no_of_beds,
            opertaing_since: req.body.opertaing_since,
            maintenance: req.body.maintenance,
            water_charges: req.body.water_charges,
            deposit: req.body.deposit,
            Warden: req.body.Warden,
            laundry: req.body.laundry,
            Notice_period: req.body.Notice_period,
            Gate_timing: req.body.Gate_timing,
            Visitor_Entry: req.body.Visitor_Entry,
            Non_veg: req.body.Non_veg,
            opposite_gender: req.body.opposite_gender,
            Smoking: req.body.Smoking,
            Drinking: req.body.Drinking,
            Loud_Music: req.body.Loud_Music,
            Party: req.body.Party,
            wifi: req.body.wifi,
            Power: req.body.Power,
            Room_cleaning: req.body.Room_cleaning,
            Water_cooler: req.body.Water_cooler,
            Gym: req.body.Gym,
            Lift: req.body.Lift,
            pincode: req.body.pincode
        });
        return res.json(userdeatils);
    }
    catch (e) {

        return res.json("Error is occured" + e);
    }
})

router.get('/fetchallnotes', async (req, res) => {
    try {
        const notes = await Details.find({ area: { $all: "Gt12" } })
        // const notes = await Details.find({id:12})
        return res.json(notes);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Some Error is Occured");
    }
});


module.exports = router;