import mongoose from "mongoose";
const { Schema } = mongoose;

const DesertSchema = new Schema(
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
  },
  { timestamps: true }
);

export default mongoose.models.Desert || mongoose.model("Desert", DesertSchema);
