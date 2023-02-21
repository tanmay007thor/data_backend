const data_set = require("../Modal/energyModal");

const getEnergyData = async (req, res) => {
  try {
    const data = await data_set.find();
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server Error" });
  }
};
const getEnergyDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await data_set.findById(id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server Error" });
  }
};

const Data = require("../Modal/energyModal");

const createEnergyData = async (req, res) => {
  try {
    const {
      end_year,
      intensity,
      sector,
      topic,
      insight,
      url,
      region,
      start_year,
      impact,
      added,
      published,
      country,
      relevance,
      pestle,
      source,
      title,
      likelihood,
    } = req.body;

    const data = new Data({
      end_year,
      intensity,
      sector,
      topic,
      insight,
      url,
      region,
      start_year,
      impact,
      added,
      published,
      country,
      relevance,
      pestle,
      source,
      title,
      likelihood,
    });

    const savedData = await data.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.log(error.obj);
    console.error(error);
    res.status(500).send("Server error");
  }
};

const updateData = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const result = await Data.updateOne({ _id: id }, { $set: updates });
    const { nModified } = result;

    if (nModified === 0) {
      return res.status(404).send("Data not found");
    }

    res.status(200).send(`Successfully updated ${nModified} record(s)`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};


module.exports = {
  getEnergyData,
  createEnergyData,
  getEnergyDataById ,
  updateData
};
