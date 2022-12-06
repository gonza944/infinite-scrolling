import { createApi } from "unsplash-js";
import Heading from "../components/heading";
import InfiniteScrolling from "../components/infinite-scrolling";
import { useGetImageReturnProps } from "./api/get-images";

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

  const data = await unsplashClient.photos.getRandom({ count: 20 });

  return {
    props: {
      images: data.response,
    },
  };
};
