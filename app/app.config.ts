/**
 * These constants are necessary for SEO
 */
export const SITE_ORIGIN = process.env.SITE_ORIGIN || "http://localhost:3000";
export const SITE_NAME = "My Site";
export const SITE_DESCRIPTION = "This is my site";
export const SITE_COPYRIGHT = "© My Site";

/**
 * If you use file kit, set these constants.
 */
export const CDN_ORIGIN = process.env.CDN_ORIGIN || "http://cdn.example.com";
export const API_ROUTE_FILES = "/api/files";

/**
 * If you use Google authentication, set these constants.
 */
export const GOOGLE_CLIENT_ID =
  process.env.GOOGLE_CLIENT_ID || "your-google-client-id";
export const GOOGLE_REDIRECT_URI = `${SITE_ORIGIN}/api/auth/callback/google`;
