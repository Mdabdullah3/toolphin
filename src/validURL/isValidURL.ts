export const isValidURL = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return ["http:", "https:", "ftp:"].includes(parsed.protocol);
  } catch (_) {
    return false;
  }
};
