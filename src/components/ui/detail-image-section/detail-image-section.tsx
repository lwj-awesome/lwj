import Image from "next/image";

export default function ImageSection({ images }: { images: string[] }) {
  const containerClass = `mt-20 mb-20 p-c-gap-lg w-full  bg-c-box-layout-color rounded-c-border-radius flex gap-c-gap-md`;

  if (images.length === 1) {
    return (
      <div className={containerClass}>
        <div className=" w-full h-full ">
          <Image
            width={800}
            height={800}
            src={images[0]}
            alt=""
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "var(--radius-c-border-radius)",
            }}
          />
        </div>
      </div>
    );
  } else if (images.length === 2) {
    return (
      <div className={containerClass}>
        {images.map((src: string, index: number) => (
          <div key={index} className=" w-[50%] h-[400px] ">
            <Image
              width={400}
              height={400}
              src={src}
              alt=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "var(--radius-c-border-radius)",
              }}
            />
          </div>
        ))}
      </div>
    );
  }
  return null;
}
