import { NextApiRequest, NextApiResponse } from "next";
import {
  createCategory,
  findAllCategory,
  findCategory,
} from "services/category.service";
import { connect } from "../../../utils/Connectbd";

type Data = {
  message: String;
  categoria: any;
};

const CategoriApi = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await connect();
  if (req.method === "POST") {
    const { body } = req;
    const categoria = await createCategory({ ...body });
    return res.status(200).json({
      categoria,
      message: "all ok ",
    });
  }

  if (req.method === "GET") {
    const { body } = req;
    if (body) {
      const categoria = await findCategory({ ...body });
      return res.status(200).json({ categoria, message: "John Doe" });
    }
    const categoria = await findAllCategory();
    return res.status(200).json({
      categoria,
      message: "all category",
    });
  }
};

export default CategoriApi;
