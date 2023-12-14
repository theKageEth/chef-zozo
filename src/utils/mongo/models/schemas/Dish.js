import mongoose from "mongoose";
const { Schema } = mongoose;

const DishSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Dish || mongoose.model("Dish", DishSchema);
