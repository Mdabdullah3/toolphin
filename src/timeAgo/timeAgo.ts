export const timeAgo = (date: Date | string): string => {
  const now = new Date();
  const past = new Date(date);
  let seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const intervals: [number, string][] = [
    [60, "second"],
    [60, "minute"],
    [24, "hour"],
    [7, "day"],
    [4.3, "week"],
    [12, "month"],
    [Infinity, "year"],
  ];

  let i = 0;
  while (seconds >= intervals[i][0] && i < intervals.length - 1) {
    i++;
    seconds /= intervals[i][0];
  }

  const count = Math.floor(seconds);
  const label = intervals[i][1];
  return `${count} ${label}${count !== 1 ? "s" : ""} ago`;
};
