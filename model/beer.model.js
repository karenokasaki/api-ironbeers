import { Schema, model } from "mongoose";

const BeerSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, trim: true },
    tagline: { type: String, trim: true },
    contributed_by: { type: String, trim: true },
    attenuation_level: { type: String, trim: true },
    description: { type: String, trim: true },
    first_brewed: { type: String, trim: true },
    brewers_tips: { type: String },
  },
  { timestamps: true }
);

const BeerModel = model("Beer", BeerSchema);

export default BeerModel;
