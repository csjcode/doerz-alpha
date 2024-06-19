import React from "react";
import Image from "next/image";
import ImageZoom from "@/components/Images/ImageZoom";
type TaskImagesProps = {
  images: string[];
};

const TaskImages = ({ images }: TaskImagesProps) => {
  return (
    <div className="flex flex-row">
      {images.map((image,i) => (
        <ImageZoom
          key={i}
          src={"/ph/150x100.png"}
          alt="Small Image"
          zSrc={"/ph/600x400.png"}
          zWidth={600}
          zHeight={400}
        />
      ))}

      {/* <Image alt="" className="pr-2 py-2" src="/ph/300x200.png" width="300" height="200"/>
    <Image alt="" className="pr-2 py-2" src="/ph/300x200.png" width="300" height="200"/>
    <Image alt="" className="py-2" src="/ph/300x200.png" width="300" height="200"/> */}
    </div>
  );
};

export default TaskImages;
