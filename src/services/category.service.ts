import Category, { CategoryDocument } from "@models/Category";
import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";

export function createCategory(input: DocumentDefinition<CategoryDocument>) {
  return Category.create(input);
}

export function findAllCategory() {
  return Category.find();
}

export function findCategory(
  query: FilterQuery<CategoryDocument>,
  options: QueryOptions = { lean: true }
) {
  return Category.findOne(query, {}, options);
}
export function findAndUpdate(
  query: FilterQuery<CategoryDocument>,
  update: UpdateQuery<CategoryDocument>,
  options: QueryOptions
) {
  return Category.findOneAndUpdate(query, update, options);
}

export function deleteCategory(query: FilterQuery<CategoryDocument>) {
  return Category.deleteOne(query);
}
