import Image from "next/image";
export default function MediaThumb({
  image,
  icon,
  alt,
  background,
  aspectRatio,
}) {
  return (
    <div
      className="card-media"
      style={{
        background,
        aspectRatio,
      }}
    >
      <Image
        src={image ?? icon}
        alt={alt}
        fill
        style={{
          objectFit: "cover",
        }}
        sizes="(max-width: 700px) 100vw, 33vw"
      />
    </div>
  );
}
