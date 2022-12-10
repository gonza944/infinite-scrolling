// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createApi } from "unsplash-js";
import { Errors } from "unsplash-js/dist/helpers/errors";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { getImagesEndpoint } from "../../utils/get-images-endpoint";

export type useGetImageReturnProps = {
  images?: Random[];
  error?: Errors;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<useGetImageReturnProps>
) {
  const data = await getImagesEndpoint();

  res.status(200).json({
    images: data.response as Random[],
  });
}
