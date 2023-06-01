const { Order } = require("../../models/order");

const createNew = async (req, res, next) => {
  try {
    const result = await Order.create({ ...req.body });

    console.log(result);
 
    res.status(201).json({
        message:'Your order create successful!'
    });
   
  } catch (error) {
    next(error);
  }
};
module.exports = createNew;