import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useGetImageReturnProps } from "../../pages/api/get-images";
import styles from "./index.module.css";
import { defineWidthAndHeight } from "./utils";

const InfiniteScrolling: React.FunctionComponent<useGetImageReturnProps> = ({
  images,
  error,
}) => {
  const { ref, inView, entry } = useInView();
  const [photos, setPhotos] = useState(images);

  useEffect(() => {
    if (inView) {
      (async () => {
        const newImagesResponse = await fetch("/api/get-images");
        const newImagesData = await newImagesResponse.json();

        setPhotos([...(photos || []), ...newImagesData.images]);
      })();
    }
  }, [inView, photos]);

  return (
    <main className={styles.mainWrapper}>
      {photos?.map((image, index) => {
        const { height, width } = defineWidthAndHeight(
          image.height,
          image.width
        );
        return (
          <div
            key={image.id}
            ref={index === photos.length - 15 ? ref : undefined}>
            <Image
              src={image?.urls.regular || ""}
              alt="random result"
              width={width}
              height={height}
            />
          </div>
        );
      })}
    </main>
  );
};

export default InfiniteScrolling;
