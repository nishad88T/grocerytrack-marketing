// Utility to build internal page URLs used by <Link to={createPageUrl(...)} />
// This version avoids adding duplicate slashes and preserves the path (no protocol-relative URLs).
export const createPageUrl = (pageName) => {
  if (!pageName) return '/';

  // If the whole pageName is just '/', return it
  if (pageName === '/') return '/';

  // Split query string if present
  const [rawPath, query] = pageName.split('?');

  // Ensure path starts with a single leading slash
  let path = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;

  // Return with query if present (don't lowercase or remove casing)
  return query ? `${path}?${query}` : path;
};
