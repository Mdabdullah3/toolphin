export const cleanObject = <T extends Record<string, any>>(
  obj: T
): Partial<T> => {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    if (value !== null && value !== undefined) {
      acc[key as keyof T] = value;
    }
    return acc;
  }, {} as Partial<T>);
};
