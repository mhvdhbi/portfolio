/**
 * A screenshot dressed as a browser window.
 *
 * A bare screenshot reads as a picture of a design; the same image inside
 * chrome reads as a website that exists. Worth the few lines.
 */
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
    <figure className={`browser-frame ${className}`}>
      <div className="browser-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        {label && (
          <span className="ms-2 truncate rounded bg-paper px-2 py-0.5 text-[10px] text-ink-3">
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
