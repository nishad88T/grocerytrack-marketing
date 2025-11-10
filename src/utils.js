export const createPageUrl = (pageName) => {
  // Logic to create URL for a given page name
  // This is a placeholder, you might have specific routing logic here
  // For now, it will just return the page name as a path
  
  // Handle home route specially
  if (pageName === '/' || pageName === '') {
    return '/';
  }
  
  let url = `/${pageName.toLowerCase()}`;
  // Handle potential query parameters if pageName includes them
  if (pageName.includes('?')) {
      const [baseName, params] = pageName.split('?');
      url = `/${baseName.toLowerCase()}?${params}`;
  }
  return url;
};
