import { createApi } from "unsplash-js";
import Heading from "../components/heading";
import InfiniteScrolling from "../components/infinite-scrolling";
import { getImagesEndpoint } from "../utils/get-images-endpoint";
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
  const data = await getImagesEndpoint();

  return {
    props: {
      images: data.response,
    },
  };
};
