// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createApi } from "unsplash-js";
import { Errors } from "unsplash-js/dist/helpers/errors";
import { Random } from "unsplash-js/dist/methods/photos/types";

export type useGetImageReturnProps = {
  images?: Random[];
  error?: Errors;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<useGetImageReturnProps>
) {
  /* res.status(200).json({ name: 'John Doe' }) */
  const unsplashClient = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: "ZgRP4uDjKn-YfrDVDKjqWC8tRCaX423xdrus2t2jE1Q",
  });

  const data = await unsplashClient.photos.getRandom({ count: 20 });

  res.status(200).json({
    images: data.response as Random[],
  });
}
