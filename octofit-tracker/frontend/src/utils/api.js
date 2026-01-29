/**
 * Get the base URL for API requests.
 * In Codespaces, uses the REACT_APP_CODESPACE_NAME environment variable.
 * In local development, falls back to http://localhost:8000.
 */
export const getApiBaseUrl = () => {
  return process.env.REACT_APP_CODESPACE_NAME
    ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
    : 'http://localhost:8000';
};
