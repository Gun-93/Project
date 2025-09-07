import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true }, 
    description: { type: String }
  },
  { timestamps: true }
);

ItemSchema.index({ name: "text", description: "text", category: "text" });
export default mongoose.model("Item", ItemSchema);
