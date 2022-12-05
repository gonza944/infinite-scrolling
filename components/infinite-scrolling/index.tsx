import { useGetImageReturnProps } from "../../pages";
import Image from "next/image";

const InfiniteScrolling: React.FunctionComponent<useGetImageReturnProps> = ({
  images,
  error,
}) => (
  <main>
    <Image
      src={images?.urls.regular || ""}
      alt="random result"
      width={images?.width}
      height={images?.height}></Image>
  </main>
);

export default InfiniteScrolling;
