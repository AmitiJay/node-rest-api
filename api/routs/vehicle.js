// import {getVehicles} from "testing-data";

const express=require('express');
const vehicleGenerator=require('testing-data');
// import { getVehicles} from 'testing-data';
const router= express.Router();







router.post('/',(req,res,next)=>{
    const vehicle={
        name:req.body.name,
        price:req.body.price
    };
    res.status(201).json({
        message:"Handling the post Vehicle request",
        createdVehicle:vehicle
    });
});

// function getVehicle(brand,numberOfVehicle){
    router.get('/:brand/:numberOfVehicles',(req,res,next)=>{
        const id=req.params.vehicleId;
        const brand=req.params.brand;
        var numberOfVehicles=req.params.numberOfVehicles;
        console.log({brand:brand,quantity:Number(numberOfVehicles)});
        let num=Number(numberOfVehicles);
        const vehiclesArray=[];
        for(let i=1;i<=num;i++){
            let vehicle = vehicleGenerator.getVehicle({brand:brand});
            vehiclesArray.push(vehicle);
        }
        res.status(200).json({
            message :'Success',
            vehiclDetail:vehiclesArray
        });
    });
// }





module.exports=router;