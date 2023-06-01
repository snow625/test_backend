const { Schema, model } = require("mongoose");

const Joi = require("joi");

const { handleMongooseSchemaError } = require("../helpers");

const order = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set your name"],
    },
    email: {
      type: String,
      required: [true, "Set your Email"],
    },

    phone: {
      type: String,
      required: [true, "Set your phone"],
    },

    adress: {
      type: String,
      required: [true, "Set your adress"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Set your full price"],
    },
    orderItems: {
      type: Array,
      required: [true, "Set your orders"],
    },
  },
  { versionKey: false, timestamps: true }
);

order.post("save", handleMongooseSchemaError);

const createOrder = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  adress: Joi.string().required(),
  totalPrice: Joi.number().required(),
  orderItems: Joi.array().required(),
});

const schemas = {
  createOrder,
};

const Order = model("order", order);

module.exports = { Order, schemas };
