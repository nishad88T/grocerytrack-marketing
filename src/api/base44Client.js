import { createClient } from '@base44/sdk';

// Initialize the Base44 client with the APP_ID from environment variables
// VITE_BASE44_APP_ID is typically how Vite exposes environment variables
export const base44 = createClient({
  appId: import.meta.env.VITE_BASE44_APP_ID,
});
