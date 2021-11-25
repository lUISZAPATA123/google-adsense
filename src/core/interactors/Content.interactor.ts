import ICategory from "core/entites/Category";
import IContent from "core/entites/Content";
import ICategoryRepository from "core/repositories/category.repository";

const SaveContent =
  (categoryRepository: ICategoryRepository) => async (content: String) => {
    // Get Category by Id
    const category: ICategory = await categoryRepository.getById(content);
    //Crear Content
    // const contentenido: IContent = {
    //   title_content,
    //   subtitle_content:String,
    //   description_content:String,
    //   content_category:category.name_category,
    // };
  };
