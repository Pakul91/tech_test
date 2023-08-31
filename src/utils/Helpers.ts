export const sortArray = <T extends Record<string, any>>(
  array: T[],
  sortOption: { key: string; direction: "ascending" | "descending" }
): T[] => {
  if (!array.length || !sortOption) return array;

  const { key, direction } = sortOption;

  array.sort((a: T, b: T) => {
    if (a[key] < b[key]) {
      return direction === "ascending" ? -1 : 1;
    } else if (a[key] > b[key]) {
      return direction === "ascending" ? 1 : -1;
    } else {
      return 0;
    }
  });

  return array;
};
