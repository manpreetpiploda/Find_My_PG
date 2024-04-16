const mongoose = require('mongoose');
const { Schema } = mongoose;

const Pg_OwnersSchema = new Schema({
    email:{
        type:String,
        require:true
    },
    contactno1:{
        type:Number,
        require:true
    },
    contactno2:{
        type:Number
    },
    name:{
        type:String,
        require:true
    },
    addharnumber:{
        type: Number,
        require:true,
        unique:true
    },
    pg_name:{
        type: String,
        require:true
    }
});


const Pg_Owners = mongoose.model('Pg_Owners',Pg_OwnersSchema);
Pg_Owners.createIndexes();
module.exports = Pg_Owners;
