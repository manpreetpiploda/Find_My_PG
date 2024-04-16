const express = require("express");
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Images = require("../Models/Images");
const { body } = require("express-validator");

// // Route 1 : This is used for adding new PG
router.post("/addDetails", async (req, res) => {
  let success = false;
  try {
    const files = req.files;
    // if (Array.isArray(files) && files.length > 0) console.log(files);
    // else {
    //   console.log("Empty Array");
    // }
    const data = await Images.create({
      src1: req.files[0].path,
      src2: req.files[1].path,
      src3: req.files[2].path,
      src4: req.files[3].path,
      src5: req.files[4].path,
      src6: req.files[5].path,
      pg_name: req.body.pg_name,
      Gender: req.body.Gender,
    //   id: req.body.id,
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
      Notice_period: req.body.Notice_period,
      Gate_timing: req.body.Gate_timing,

      Warden: req.body.Warden,
      laundry: req.body.laundry,
      Visitor_Entry: req.body.Visitor_Entry,
      Non_veg: req.body.Non_veg,
      opposite_gender: req.body.opposite_gender,
      Smoking: req.body.Smoking,
      Drinking: req.body.Drinking,
      Loud_Music: req.body.Loud_Music,
      contactno1: req.body.contactno1,
      wifi: req.body.wifi,
      Power: req.body.Power,
      Room_cleaning: req.body.Room_cleaning,
      Water_cooler: req.body.Water_cooler,
      Gym: req.body.Gym,
      Lift: req.body.Lift,
      pincode: req.body.pincode,
    //   user: req.user.id
    });
    success = true;
    return res.json({ success: success, data: data });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ success: false, error: "Some Error Occured" });
  }
});

router.get('/fetchallnotes', async (req, res) => {
    try {
        const notes = await Images.find({ area: { $all: "Gt12" } })
        // const notes = await Details.find({id:12})
        return res.json(notes);
    } catch (error) {
        // console.error(error);
        return res.status(500).send("Some Error is Occured");
    }
});



module.exports = router;
