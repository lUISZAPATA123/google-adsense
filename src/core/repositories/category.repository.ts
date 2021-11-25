import ICategory from "core/entites/Category";

export default interface ICategoryRepository {
  getById(id: String): Promise<ICategory>;
}
