const express=require('express');
const app=express();
const morgan =require('morgan');
const bodyParser=require('body-parser');
const corse=require('cors');
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const vehiclesRoutes=require('./api/routs/vehicle');
const addvehiclesRoutes=require('./api/routs/addVehicles');

// app.use((req,res,next)=>{
//     res.header('Acess-Control-Allow-Origin','*');
//     res.header('Acess-Control-Allow-Headers','*');
//
//     if(req.method==='OPTIONS'){
//         res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,GET,DELETE');
//         return res.status(200).json({});
//     }
//     next();
// })
app.use(corse());

//Routs which handle request
app.use('/api/vehicles',vehiclesRoutes);
app.use('/adVehicle',addvehiclesRoutes);


app.use((req,res,next)=>{
    const error= new Error('Not Found');
    error.status=404;
    next(error);
});
app.use((error,req,res,next)=>{
   res.status(error.status || 500);
   res.json({
       error:{
           message : error.message
       }
   })
});



module.exports=app;