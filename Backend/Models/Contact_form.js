const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobile_no:{
        type:Number,
        required: true,
    },
    city:{
        type:String,
        require:true
    },
    enquiry_type:{
        type: String,
        default: "pg_booking"
    },
    message:{
        type: String,
        require:true
    }
});

module.exports = mongoose.model('Contact_form',FormSchema);