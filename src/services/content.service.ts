import Content, { ContentDocument } from "@models/Content";
import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";

export function CreateContent(input: DocumentDefinition<ContentDocument>) {
  return Content.create(input);
}

export function GetContent(
  query: FilterQuery<ContentDocument>,
  options: QueryOptions = { lean: true }
) {
  return Content.findOne(query, {}, options);
}

export function GetContents() {
  return Content.find().populate("content_category");
}

export function findUpdate(
  query: FilterQuery<ContentDocument>,
  update: UpdateQuery<ContentDocument>,
  options: QueryOptions
) {
  return Content.findOneAndUpdate(query, update, options);
}

export function deleteContent(query: FilterQuery<ContentDocument>) {
  return Content.deleteOne(query);
}
