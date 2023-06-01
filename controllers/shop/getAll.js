const { Burger } = require("../../models/burger");

const getAll = async (req, res, next) => {
  try {
    const result = await Burger.find();

    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = getAll;
