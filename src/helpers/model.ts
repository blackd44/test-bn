export function sortFields(str?: string) {
  if (!str) return [];

  const fields = str
    ?.split?.(",")
    ?.map?.((word) => {
      word = word?.trim?.();
      if (!word) return [];

      const [sign, ...f] = word;
      if (!["-", "+"].includes(sign)) {
        return [[sign, ...f].join(""), 1];
      } else if (["+"].includes(sign)) {
        return [f.join(""), 1];
      } else {
        return [f.join(""), -1];
      }
    })
    ?.filter?.((word) => word?.length == 2);

  return Object.fromEntries(fields);
}
