const EnergyRouter = require("express").Router();
const {
  getEnergyData , createEnergyData, getEnergyDataById , updateData
} = require("../Controller/energyController");
const { create } = require("../Modal/energyModal"); 

EnergyRouter.get("/", getEnergyData);
EnergyRouter.post("/",  createEnergyData)
EnergyRouter.get("/:id" , getEnergyDataById )
EnergyRouter.patch("/:id" , updateData )


module.exports = EnergyRouter;