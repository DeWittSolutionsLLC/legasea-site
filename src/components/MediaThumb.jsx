import Image from "next/image";
export default function MediaThumb({
  image,
  icon,
  alt,
  background,
  aspectRatio,
}) {
  if (image) {
    return (
      <div
        className="card-media"
        style={{
          background,
          aspectRatio,
        }}
      >
        <Image
          src={image}
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
  return (
    <div
      className="card-media"
      style={{
        background,
        aspectRatio,
      }}
      aria-hidden="true"
    >
      {icon}
    </div>
  );
}
