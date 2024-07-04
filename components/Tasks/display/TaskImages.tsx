import React from "react";
import Image from "next/image";
import ImageZoom from "@/components/Images/ImageZoom";
type TaskImagesProps = {
  images: string[];
};

const TaskImages = ({ images }: TaskImagesProps) => {
  console.log(`images: ${images}`);


  return (
    <div className="flex flex-row">
      {images.map((image,i) => {
        console.log(`image: ${image}`);

      return (
        <ImageZoom
          key={i}
          src={image ? `/images/details/${image}` : "/images/ph/600x400.png"}
          alt="Small Image"
          zSrc={image ? image : "/images/ph/600x400.png"}
          zWidth={600}
          zHeight={400}
        />
      )})}

    </div>
  );
};

export default TaskImages;
