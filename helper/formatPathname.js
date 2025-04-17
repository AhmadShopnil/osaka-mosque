

/**
 * Formats a URL pathname by capitalizing each segment.
 * Example: "/events/upcoming" => "/Events/Upcoming"
 */
export function formatPathname(pathname) {
    return pathname
      .split('/')
      .filter(Boolean)
      .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join('/')
      .replace(/^/, '/'); // add leading slash
  }
  