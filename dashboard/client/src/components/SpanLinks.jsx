export default function SpanLinks({ text, path }) {
  return (
    <a href={path} className="text-gray-600 font-medium hover:underline">
      {text}
    </a>
  );
}
