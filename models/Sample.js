import { Schema, model } from "mongoose";
const SampleSchema = new Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Sample = model("Sample", SampleSchema);
export { Sample };