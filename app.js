const express=require('express');
const morgan=require('morgan');
const bodyParser = require('body-parser');
const app=new express();
const routeb=require('./routes/hospitalroutes');
app.use(morgan('dev'));//Application level middleware
app.use(bodyParser.json());
app.use('/api',routeb);
require('dotenv').config();
const PORT=process.env.PORT || 3000;


app.listen(PORT, function(){
   console.log(`Server is running on port ${PORT}`);
});

