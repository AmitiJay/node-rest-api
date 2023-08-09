const express=require('express');

const router= express.Router();

router.post('/',(req,res,next)=>{
    const vehicle={
        name:req.body.name,
        price:req.body.price
    };
    res.status(201).json({
        message:"Vehicles are added",
        createdVehicle:vehicle
    });
});

router.get('/vehicleId',(req,res,next)=>{
    res.status(20).json({
        message:"Vehicles details",
        vehicleId:req.params.vehicleId
    });
});
module.exports=router;