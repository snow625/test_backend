const { Schema, model } = require("mongoose");
// const Joi = require("joi");
const { handleMongooseSchemaError } = require("../helpers");

const burger = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for burger"],
    },
    
    price: {
      type: Number,
      required: [true, "Set price for burger"],
    },
    shop_id: {
      type: String,
      required: [true, "Set shop for burger"],
    },
    icon: {
      type: String,
      required: [true, "Set photoLink for burger"],
    }
  },
  { versionKey: false, timestamps: true }
);


// "name": "Zinger",
// "price": 400,
// "shop_id": "KFC",
// "icon": "Zinger"

burger.post("save", handleMongooseSchemaError);



const Burger = model("burger", burger);

module.exports = { Burger };
