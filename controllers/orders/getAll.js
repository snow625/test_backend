const { Order } = require("../../models/order");

const getAll = async (req, res, next) => {
  try {
    const result = await Order.find();

    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = getAll;
