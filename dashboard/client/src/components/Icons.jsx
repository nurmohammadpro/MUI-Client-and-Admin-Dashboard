export default function Icons({ src, alt, width = 24, height = 24 }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
}
