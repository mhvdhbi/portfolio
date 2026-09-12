export function Frame({
  src,
  alt,
  label,
  priority = false,
  className = '',
}: {
  src: string
  alt: string
  label?: string
  priority?: boolean
  className?: string
}) {
  return (
    <figure className={`frame ${className}`}>
      <div className="frame-bar">
        <span className="frame-dot" />
        <span className="frame-dot" />
        <span className="frame-dot" />
        {label && (
          <span className="ml-2 truncate rounded bg-void/60 px-2 py-0.5 font-mono text-[10px] text-text-3">
            {label}
          </span>
        )}
      </div>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        className="block w-full"
      />
    </figure>
  )
}
