export default function OptimizedImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width = 900,
  height = 675,
  fetchPriority,
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      fetchpriority={fetchPriority}
      sizes={sizes}
    />
  );
}
