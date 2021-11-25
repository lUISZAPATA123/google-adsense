import { Document, Schema, model, models } from "mongoose";
import { CategoryDocument } from "./Category";

export interface ContentDocument extends Document {
  title_content: String;
  subtitle_content: String;
  description_content: String;
  content_category: CategoryDocument["_id"];
}

const ContentSchema = new Schema({
  title_content: {
    type: String,
    required: true,
  },
  subtitle_content: {
    type: String,
    required: true,
  },
  description_content: {
    type: String,
    required: true,
  },
  url_image_content: {
    type: String,
    required: true,
  },
  content_category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Content =
  models.Content || model<ContentDocument>("Content", ContentSchema);
export default Content;
