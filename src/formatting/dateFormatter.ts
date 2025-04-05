export const formatDate = (
  date: Date | string,
  format: string = "YYYY-MM-DD"
): string => {
  const d = new Date(date);

  return format
    .replace(/YYYY/g, d.getFullYear().toString())
    .replace(/MM/g, (d.getMonth() + 1).toString().padStart(2, "0"))
    .replace(/DD/g, d.getDate().toString().padStart(2, "0"));
};
