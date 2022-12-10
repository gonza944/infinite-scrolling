import { createApi } from "unsplash-js";

export const getImagesEndpoint = async () => {
  try {
    const unsplashClient = createApi({
      // Don't forget to set your access token here!
      // See https://unsplash.com/developers
      accessKey: "ZgRP4uDjKn-YfrDVDKjqWC8tRCaX423xdrus2t2jE1Q",
    });

    const data = await unsplashClient.photos.getRandom({ count: 50 });

    return data;
  } catch (error) {
    console.log(error);
    return { response: [] };
  }
};
