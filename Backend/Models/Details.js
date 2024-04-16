const mongoose = require('mongoose');
const { Schema } = mongoose;

const DetailsSchema = new Schema({
 
    id:{
        type:Number,
        require:true,
        unique:true
    },
    src1:{
        type:String,
        require:true
    },
    src2:{
        type:String,
        require:true
    },
    src3:{
        type:String,
        require:true
    },
    src4:{
        type:String,
        require:true
    },
    src5:{
        type:String,
        require:true
    },
    src6:{
        type:String,
        require:true
    },
    src7:{
        type:String,
        require:true
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
        type:String
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
    Paty: {
        type:String
    },
    wifi : {
        type:String
    },
    Power : {
        type:String
    },
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
    no_of_beds:{
        type:Number
    },
    opertaing_since:{
        type:Number
    },

});


// const data = mongoose.model('Details',DetailsSchema);
// data.createIndexes();
// module.exports = data;


module.exports = mongoose.model('Details',DetailsSchema);