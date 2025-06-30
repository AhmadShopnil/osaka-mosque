/**
 * Converts a pathname like "/blog/importance-of-eid-ul-fiter"
 * into "Home / Blog / Importance Of Eid Ul Fiter"
 */
export function formatPathname(pathname) {
  const formattedSegments = pathname
    .split('/')
    .filter(Boolean)
    .map(segment =>
      segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );

  return ['', ...formattedSegments].join(' / ');
}
