export const uniqueById = <T>(array: T[], duplicateKey: keyof T): T[] => {
  const map = new Map<T[keyof T], T>();
  array.forEach((item) => {
    map.set(item[duplicateKey], item);
  });
  return Array.from(map.values());
};
