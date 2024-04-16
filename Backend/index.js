const connectMoongose = require('./database');
const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

// multer for images
const multer  = require('multer');

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"uploads");
  },filename:function(req,file,cb){
    cb(null,`${file.originalname}`);
  },
})


const upload = multer({ storage })

app.use(cors());

// to get content in json format 

app.use(express.json());
app.use('/uploads',express.static('uploads'));

// connect To Data Base
connectMoongose();
app.use('/api/auth',require('./routes/auth'));
app.use('/api/details',require('./routes/details'));
app.use('/api/contact_form',require('./routes/contact_form'));
app.use('/api/owner_details',require('./routes/pg_owners'));

app.use('/api/upload',upload.array('image'),require('./routes/upload'));


app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`)
})