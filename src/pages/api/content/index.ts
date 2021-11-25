import type { NextApiRequest, NextApiResponse } from "next";
import { CreateContent } from "services/content.service";

const ContentApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  if (req.method === "POST") {
    const content = await CreateContent({ ...body });
    return res.status(200).json({
      content,
      message: "create content successfully",
    });
  }
};

export default ContentApi;
