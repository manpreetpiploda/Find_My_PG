const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImagesSchema = new Schema({

    //  user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'user'
    // },
    src1:{
        type:String
    },
    src2:{
        type:String
    },
    src3:{
        type:String
    },
    src4:{
        type:String
    },
    src5:{
        type:String
    },
    src6:{
        type:String
    },
    pg_name:{
        type:String
    },
    Gender:{
        type:String
    },
    Address:{
        type:String
    },
    city:{
        type:String
    },
    desc:{
        type:String
         
    },
    area:{
        type:String
        
    },
    pincode:{
        type:String
        // type:Number     
    },
    Food_available:{
        type:String
         
    },
    ac_room:{
        type:String
         
    },
    parking:{
        type:String
         
    },
    power_backup:{
        type:String
         
    },
    available_for:{
        type:String
         
    },
    preferred_tenants:{
        type:String
         
    },
    maintenance:{
        type:String
         
    },
    water_charges:{
        type:String
         
    },
    deposit:{
        type:Number,
         
    },
    laundry:{
        type:String
         
    },
    Notice_period: {
        type:String
         
    },
    Gate_timing:{
        type:String
         
    },
    Visitor_Entry:{
        type:String
         
    },
    Non_veg:{
        type:String
         
    },
    opposite_gender: {
        type:String
         
    },
    Smoking: {
        type:String
         
    },
    Drinking: {
        type:String
         
    },
    Loud_Music: {
        type:String
         
    },
    // Party: {
    //     type:String
         
    // },
    wifi : {
        type:String
         
    },
    // Power : {
    //     type:String
         
    // },
    Room_cleaning : {
        type:String
         
    },
    Water_cooler : {
        type:String
         
    },
    Gym :{
        type:String
         
    },
    Lift : {
        type:String
         
    },
    Warden :{
        type:String
         
    },
    Price:{
        type:Number
         
    },
    contactno1:{
        type:Number
    },
    no_of_beds:{
        type:Number
         
    },
    opertaing_since:{
        type:Number
         
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Images',ImagesSchema);