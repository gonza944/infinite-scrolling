import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useGetImageReturnProps } from "../../pages/api/get-images";
import styles from "./index.module.css";

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

        setPhotos([...photos || [], ...newImagesData.images]);
      })();
    }
  }, [inView, photos]);

  return (
    <main className={styles.mainWrapper}>
      {photos?.map((image, index) => (
        <div key={image.id} ref={index === photos.length - 3 ? ref : undefined}>
          <Image
            src={image?.urls.regular || ""}
            alt="random result"
            width={500}
            height={400}
          />
        </div>
      ))}
    </main>
  );
};

export default InfiniteScrolling;
