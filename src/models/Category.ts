import { Document, Schema, model, models } from "mongoose";

export interface CategoryDocument extends Document {
  name_category: String;
}

const CategorySchema = new Schema({
  name_category: {
    type: String,
    required: true,
  },
});

const Category =
  models.Category || model<CategoryDocument>("Category", CategorySchema);
export default Category;
