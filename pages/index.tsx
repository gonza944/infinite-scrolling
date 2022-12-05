import { createApi } from "unsplash-js";
import { Errors } from "unsplash-js/dist/helpers/errors";
import { Random } from "unsplash-js/dist/methods/photos/types";
import Heading from "../components/heading";
import InfiniteScrolling from "../components/infinite-scrolling";

export type useGetImageReturnProps = {
  images?: Random;
  error?: Errors;
};

export default function Home({ images, error }: useGetImageReturnProps) {
  return (
    <div>
      <Heading />
      <InfiniteScrolling images={images} error={error} />
    </div>
  );
}

export const getStaticProps = async () => {
  const unsplashClient = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: "ZgRP4uDjKn-YfrDVDKjqWC8tRCaX423xdrus2t2jE1Q",
  });

  const data = await unsplashClient.photos.getRandom(undefined);

  return {
    props: {
      images: data.response,
    },
  };
};
